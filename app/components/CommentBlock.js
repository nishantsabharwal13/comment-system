var React = require('react');
var CommentsGrid = require('./CommentsGrid');
var CommentForm = require('./CommentForm');


var CommentBlock=React.createClass({
getInitialState: function() {

return { 
dataComments: this.props.dataComentsBlock,
showComment: false 
};
},
commentAjaxSubmit:function(data)
{
  var update_id=this.props.updateID;
  var reactThis=this;
  var data='updateID='+update_id+'&user_comment='+data.user_comment;
  ajaxPostReact('php/updateComment.php', data , reactThis, function(data){
      var comments = reactThis.state.dataComments;
      var newComments = comments.concat([data.comments[0]]);
      reactThis.setState({dataComments: newComments});
  });
  this.setState({ showComment: false });
},
commentLink:function()
{
  this.setState({ showComment: !this.state.showComment });
  this.renderCommentForm();
},
renderCommentForm: function()
{
    if(this.state.showComment)
    {

    return (<CommentForm postUrl="php/updateComment.php" onCommentSubmit={this.commentAjaxSubmit} />)
    }
},
deleteComment: function(e) 
{
  e.preventDefault();
  var commentIndex=e.target.getAttribute('value');
  var com_id=e.target.getAttribute('data');
  var update_id=this.props.updateID;
   
  var reactThis=this;
  var data='updateID='+update_id+'&commentID='+com_id;
  ajaxPostReact('php/deleteComment.php', data , reactThis, function(data){
      reactThis.state.dataComments.splice(commentIndex,1);
      reactThis.setState({dataComments: reactThis.state.dataComments});
  });

},
render:function(){
  return <div ><div className="feedLinks">
          <a href="javascript:void(0)"  onClick={this.commentLink}>Reply</a></div>
          {this.renderCommentForm()}
          <CommentsGrid dataComments={this.state.dataComments} deleteComment={this.deleteComment} postUrl="php/deleteComment.php"/>
          
          </div> 
}
});
module.exports = CommentBlock;