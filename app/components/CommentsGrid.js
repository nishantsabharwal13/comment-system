var React = require('react');

var CommentsGrid=React.createClass({
textToLink: function(content){
  var finalContent=content;
  return {__html: finalContent}
},
render: function(){
var comments=this.props.dataComments.map(function(comment,index){
return(
 <div className="feedCommentGrid" key={comment.com_id}>
    <img src={comment.profile_pic} className="commentImg" /> 
        <div className="commentText"> 
          <b>{comment.name}</b> 
          <div> 
         <span dangerouslySetInnerHTML={this.textToLink(comment.comment)}  />  
          </div>
          <div className="deleteReply">
          <a href="javascript:void(0)"  data={comment.com_id} className="commetDelete" onClick={this.props.deleteComment} value={index} >Delete</a>
          </div>
        </div>
    </div>
)
}.bind(this));
  return(
   <div id="commnetsFeed"  >
      {comments}
     </div>
  );
  }
});

module.exports = CommentsGrid;