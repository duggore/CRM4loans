var Users = require('./users.jsx');

var Content= class ContentClass extends React.Component {
	constructor() {
    	super();
     	this.state={
	     	activemenu: "users"};
 	}

 	render() {
 		switch (this.props.activemenu) {
 			case "users": 
 				return (
		    		<div>
		    			<Users />
		    		</div>
	    		)
	    	case "groups":
	    		return (
		    		<div>
		    			<Users />
		    		</div>
	    		)

 		}

    	
    }


}

