var React = require('react');
var ReactDOM = require('react-dom');  
var CommentForm=React.createClass({
  getInitialState: function(){
  return { user_comment: ''};
  },

  commentChange:function(e){
  this.setState({user_comment: e.target.value });
  },

  commentSubmit: function(e){
  e.preventDefault();
  var user_comment= this.state.user_comment.trim();
  if(!user_comment)
  {
  return;
  }
  else
  {
  this.props.onCommentSubmit({ user_comment: user_comment});
  this.setState({ user_comment:''});
  }
  },
  componentDidMount: function(){
    ReactDOM.findDOMNode(this.refs.commentInput).focus(); 
  },

  render: function(){
  return(
<div className="feedCommentForm" >
<form onSubmit={this.commentSubmit} >
<input className="commentInput" onChange={this.commentChange}  value={this.state.user_comment} ref="commentInput" placeholder="Reply to this comment..."/>
</form>
</div>
  )
  }
});


module.exports= CommentForm ;