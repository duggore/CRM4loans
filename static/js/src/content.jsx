

import {Users} from './users.jsx';
import {Groups} from './groups.jsx';

export var Content= class ContentClass extends React.Component {
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
		    			<Groups />
		    		</div>
	    		)

 		}

    	
    }


}

