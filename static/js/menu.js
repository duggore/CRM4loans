
class MenuBox extends React.Component {
  constructor() {
    super();
      this.state={data:""};

  }

  componentDidMount() {
    $.ajax({
      url: "/api/v1/menu/getall",
      type: 'POST',
      dataType: 'json',
      success: function(data,textStatus, xhr) {
        this.setState({data:data});
    //    $("#menu").append(data.Items[0].Name)
      }.bind(this),
      beforeSend: function(xhr) {
         xhr.setRequestHeader('Authorization','Bearer ' + t);
      }.bind(this),
    });
  //  this.setState({a:this.state.a+1});
  }

  render() {
    return (
      <div>
      <Menu data={this.state.data.Items} />
      </div>
    );
  }
}

class Menu extends React.Component {
  constructor() {
    super();
  } //
  render() {
    return (
      <div></div>
    );
  }
}


ReactDOM.render(
  <MenuBox />,
  document.getElementById('menu')
);
