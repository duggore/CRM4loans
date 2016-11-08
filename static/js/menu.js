
class MenuBox extends React.Component {
  constructor() {
     super();
      this.state={data:[]};
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
  render() {
    return (
      <div id="primary_menu_items">
        {this.props.data && this.props.data.map(function(m,i){
          return <a key={i} href={m.Link}>{m.Name}</a>;
          })
        }
      </div>
      
    );
  }
}


ReactDOM.render(
  <MenuBox />,
  document.getElementById('menu')
);
