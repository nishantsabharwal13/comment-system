var React = require('react');
var CommentsGrid = require('./CommentsGrid');
var CommentForm = require('./CommentForm');
var axios = require('axios');

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

    axios.post('api/updateComment.php',data)
    .then(function (data) {
     var comments = reactThis.state.dataComments;
     var newComments = comments.concat([data.data.comments[0]]);
     reactThis.setState({dataComments: newComments});
   })
    .catch(function (error) {
      console.log(error);
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

      return (<CommentForm postUrl="api/updateComment.php" onCommentSubmit={this.commentAjaxSubmit} />)
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

    axios.post('api/deleteComment.php',data)
    .then(function (data) {
      reactThis.state.dataComments.splice(commentIndex,1);
      reactThis.setState({dataComments: reactThis.state.dataComments});
    })
    .catch(function (error) {
      console.log(error);
    });


  },
  render:function(){
    return <div ><div className="feedLinks">
    <a href="javascript:void(0)"  onClick={this.commentLink}>Reply</a></div>
    {this.renderCommentForm()}
    <CommentsGrid dataComments={this.state.dataComments} deleteComment={this.deleteComment} postUrl="api/deleteComment.php"/>

    </div> 
  }
});
module.exports = CommentBlock;