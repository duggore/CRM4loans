class Content extends React.Component {
	constructor() {
    	super();
     	this.state={
	     	activemenu: "users"};
 	}

 	render() {
    	return (
    		<div>
    			{this.props.activemenu}
    		</div>
    		)
    }


}

// ReactDOM.render(
//   <Content activemenu="users"/>,
//   document.getElementById('content')
// );


