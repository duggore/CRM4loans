export var Users=class UsersClass extends React.Component {
	constructor() {
    	super();
        this.state={
            selected:true
        };
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
                    <UserList parentContext={this}/>
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

        if (this.props.visible) {
            return (
                <button type="button" className="btn btn-default">Delete user</button>
            )
        }
        return (null)
    }
}

class UserList extends React.Component {
     constructor() {
        super();
        this.state={
            users:[],
            parentContext: this.props.parentContext
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

    componentDidUpdate() {
        $("input[type=\"checkbox\"]").click(function(event){
            this.setState({selected:false});
            }).bind(this.props.parentContext) ;
    
    }

    render() {
        return (
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <td><input type="checkbox" /></td>
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
                                <td><input type="checkbox" /></td>
                                <td>{i}</td>
                                <td>{m.Username}</td>
                                <td>{m.Name}</td>
                                <td>{m.Phone}</td>
                            </tr>
                            )
                    })
                }
                </tbody>
            </table>
        )
    }


}
