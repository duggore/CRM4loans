export var Users=class UsersClass extends React.Component {
	constructor() {
    	super();
        this.state={
            selected:0
        };
        this.selectUser=this.selectUser.bind(this);
        this.deselectUser=this.deselectUser.bind(this);
    }

    selectUser() {
        this.setState({selected:this.state.selected+1});
    }

    deselectUser() {
         this.setState({selected:this.state.selected-1});
    }

    render() {
    	return (
            <div>
        		<h2>
        			Users component
        		</h2>
                <div className="btn-group" role="group" aria-label="...">
                    <button type="button" className="btn btn-default">Add new user</button>
                    <ButtonDeleteUser visible={this.state.selected}/>
                    
                </div>
                <div>
                    <UL select={this.selectUser}
                                deselect={this.deselectUser}
                    />
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
                this.props.select();
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
                                <td><input type="checkbox" onChange={this.changeUserSelection.bind(this)}/></td>
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
