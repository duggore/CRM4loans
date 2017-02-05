export var Users=class UsersClass extends React.Component {
	constructor() {
    	super();
        this.state={
            selected:0,
            selectedUser:{
                login:"",
                name:"",
                phone:""
            }
        };
        this.selectUser=this.selectUser.bind(this);
        this.deselectUser=this.deselectUser.bind(this);
//        this.showEditWindow=this.showEditWindow.bind(this);
    }

    selectUser(user) {
        
        this.setState({selected:this.state.selected+1,
            selectedUser:user});

    }

    deselectUser() {
         this.setState({selected:this.state.selected-1,
         selectedUser:{
            login:"",
            name:"",
            phone:""}});
    }

    // showEditWindow() {
    //     this.setState({editWindow:true});
    // }



    render() {
    	return (
            <div>
                <EditWindow user={this.state.selectedUser} /> 
        		<h2>
        			Users component
        		</h2>
                <div className="btn-group" role="group" aria-label="...">
                    <button type="button" className="btn btn-default">Add new user</button>
                    
                    <ButtonEditUser visible={this.state.selected}
                        showEditWindow={this.showEditWindow} />
                    <ButtonDeleteUser visible={this.state.selected}/>
                </div>
                <div>
                    <UL select={this.selectUser}
                        deselect={this.deselectUser} />
                </div>

            </div>
    	)
    }
     	
}

class ButtonDeleteUser extends React.Component {
    constructor() {
        super();
    }

    render() {

        if (this.props.visible>0) {
            return (
                <button type="button" className="btn btn-default">Delete user</button>
            )
        }
        return (null)
    }
}

class ButtonEditUser extends React.Component {
    constructor(props) {
        super(props);
    }
    // showEditWindow() {
    //     EditWindow.setState({visible:true})
    // }

    render() {

        if (this.props.visible==1) {
            return (
                <button type="button" className="btn btn-default" data-toggle="modal" data-target="#modalWindowEditUser" >Edit user</button> //onClick={this.props.showEditWindow.bind(this)}
            )
        }
        return (null)
    }
}

export var UL=class UserList extends React.Component {
     constructor(props) {
        super(props);
        this.state={
            users:[]
          
        };
    }

    componentDidMount() {
        $.ajax({
            url: "/api/v1/users/getall",
            type: 'POST',
            dataType: 'json',
            success: function(data,textStatus, xhr) {
                this.setState({users:data});
            }.bind(this),
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization','Bearer ' + t);
            }.bind(this),
        });
        

    }

    changeUserSelection(event) {
        if (event.target.checked) {
                this.props.select(this.state.users[event.target.id]);
            } else {
                this.props.deselect();
            }
           
    }

    render() {
        return (
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <td></td>
                        <td>№</td>
                        <td>Login</td>
                        <td>Name</td>
                        <td>Phone number</td>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.users && this.state.users.map(function(m,i){
                        return (
                            <tr key={i}>
                                <td><input type="checkbox" id={i} onChange={this.changeUserSelection.bind(this)}/></td>
                                <td>{i}</td>
                                <td>{m.Username}</td>
                                <td>{m.Name}</td>
                                <td>{m.Phone}</td>
                            </tr>
                            )
                    }.bind(this))
                }
                </tbody>
            </table>
        )
    }


}

export var EditWindow=class EditUserWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            user: {
                login:"",
                name:"",
                phone:""
            }
        };
        
        // this.state={
        //     visible: false
        // }

    }

   

    render() {
 //       if (this.props.visible) {
            if (this.props.user==undefined) {
            this.state={
                user: {
                    login:"",
                    name:"",
                    phone:""
                }}
        } else {
            this.state={
                user:this.props.user
            }
        }
            return (
                <div className="modal fade" id="modalWindowEditUser">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>
                                Edit User Information

                            </div>
                            <div className="modal-body">
                                <div className="input-group">
                                    <span className="input-group-addon" >Login</span>
                                    <input type="text" className="form-control" placeholder="Login" value={this.state.user.Username}/> 
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon" >Full name</span>
                                    <input type="text" className="form-control" placeholder="Full name" />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon" >Phone number</span>
                                    <input type="text" className="form-control" placeholder="Phone number" />
                                </div>
                                
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        // } else {
        //     return (null)
        // }
    }
}
