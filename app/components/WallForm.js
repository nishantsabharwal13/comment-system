var React = require('react');
var ReactDOM = require('react-dom'); 
var WallForm=React.createClass({

  getInitialState: function(){
  return { user_update: ''};
  },
  updateChange:function(e){
  this.setState({user_update: e.target.value });
  },
  updateSubmit: function(e){
    e.preventDefault();
    var user_update= this.state.user_update.trim();
    if(!user_update)
    {
      return;
    }
    else
    {
      this.props.onUpdateSubmit({ user_update: user_update});
      this.setState({  user_update:''});
    }
  },
  componentDidMount: function(){
    ReactDOM.findDOMNode(this.refs.updateInput).focus(); 
  },
  render:function(){
  return(
    <form onSubmit={this.updateSubmit} >
    <input className="commentInput" onChange={this.updateChange} value={this.state.user_update} ref="updateInput" placeholder="Write a comment..."/>
    
    </form>
  );
  }
  
});


module.exports= WallForm ;