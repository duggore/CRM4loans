export var Users=class UsersClass extends React.Component {
	constructor() {
    	super();
        this.state={
            selected:0,
            selectedUser:{
                Login:"",
                Lastname:"",
                Firstname:"",
                Middlename:"",
                Phone:"",
                Email:""
            }
        };
        this.selectUser=this.selectUser.bind(this);
        this.deselectUser=this.deselectUser.bind(this);
        this.editUser=this.editUser.bind(this);

    }

    selectUser(user) {
        
        this.setState({selected:this.state.selected+1,
            selectedUser:user});

    }

    deselectUser() {
         this.setState({selected:this.state.selected-1,
         selectedUser:{
            Login:"",
            Lastname:"",
            Firstname:"",
            Middlename:"",
            Phone:"",
            Email:""
        }});
    }

    editUser(user) {
        if (user!=undefined) {
            this.setState({selectedUser:user});
        }
    }

    newUser() {
        this.setState({
            selectedUser: {
               Login:"",
                Lastname:"",
                Firstname:"",
                Middlename:"",
                Phone:"",
                Email:""
            }});
        $("#modalWindowEditUser").modal("show");
    }
   
    render() {
    	return (
            <div>
                <EditWindow user={this.state.selectedUser} /> 
        		<h2>
        			Users component
        		</h2>
                <div className="btn-group" role="group" aria-label="...">
                    <button type="button" className="btn btn-default" onClick={this.newUser.bind(this)}>Add new user</button>
                    
                    <ButtonEditUser visible={this.state.selected}
                        showEditWindow={this.showEditWindow} />
                    <ButtonDeleteUser visible={this.state.selected}/>
                </div>
                <div>
                    <UL select={this.selectUser}
                        deselect={this.deselectUser}
                        edit={this.editUser} />
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

    //show editwindow
    dblclick(event) {
        if (event.currentTarget.getAttribute("data-id")!=undefined) {
            this.props.edit(this.state.users[event.currentTarget.getAttribute("data-id")]);
            $("#modalWindowEditUser").modal("show");
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
                        <td>Lastname</td>
                        <td>Firstname</td>
                        <td>Middlename</td>
                        <td>Phone</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.users && this.state.users.map(function(m,i){
                        return (
                            <tr key={i} data-id={i} onDoubleClick={this.dblclick.bind(this)}>
                                <td><input type="checkbox" id={i} onChange={this.changeUserSelection.bind(this)}/></td>
                                <td>{i}</td>
                                <td>{m.Login}</td>
                                <td>{m.Lastname}</td>
                                <td>{m.Firstname}</td>
                                <td>{m.Middlename}</td>
                                <td>{m.Phone}</td>
                                <td>{m.Email}</td>
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
                    Login:"",
                    Lastname:"",
                    Firstname:"",
                    Middlename:"",
                    Phone:"",
                    Email:""
                }};
        
    }

    change(event) {
        if (event!=undefined) {
            let newuser=this.state.user;
            newuser[event.target.id]=event.target.value;
            this.setState(
                {   
                    user:newuser
                }
            );
        }
    } 

    save() {
        console.log(this.state.user);
        $("#modalWindowEditUser").modal("hide");
    }  

    componentWillReceiveProps(nextProps) {
        if (nextProps.user==undefined) {
            this.setState({
                user: {
                    Login:"",
                    Lastname:"",
                    Firstname:"",
                    Middlename:"",
                    Phone:"",
                    Email:""
                }});
        } else {
            this.setState({
                user:nextProps.user});
            
        }
    }

    render() {
        return (
            <div className="modal fade" id="modalWindowEditUser">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            Edit User Information

                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <span className="input-group-addon" >Login</span>
                                <input type="text" className="form-control" placeholder="Login" id="Login" value={this.state.user.Login} onChange={this.change.bind(this)}/> 
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon" >Lastname</span>
                                <input type="text" className="form-control" placeholder="Lastname" id="Lastname" value={this.state.user.Lastname} onChange={this.change.bind(this)}/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon" >Firstname</span>
                                <input type="text" className="form-control" placeholder="Firstname" id="Firstname" value={this.state.user.Firstname} onChange={this.change.bind(this)}/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon" >Middlename</span>
                                <input type="text" className="form-control" placeholder="Middlename" id="Middlename" value={this.state.user.Middlename} onChange={this.change.bind(this)}/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon" >Phone number</span>
                                <input type="text" className="form-control" placeholder="Phone number" id="Phone" value={this.state.user.Phone} onChange={this.change.bind(this)}/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon" >Email</span>
                                <input type="text" className="form-control" placeholder="Email" id="Email" value={this.state.user.Email} onChange={this.change.bind(this)}/>
                            </div>
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.save.bind(this)}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
   
    }
}
