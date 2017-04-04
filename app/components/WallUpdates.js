var React = require('react');
var CommentBlock = require('./CommentBlock');

var WallUpdates=React.createClass({
textToLink: function(content){
  var finalContent=textToLink(content);
  return {__html: finalContent}
},
render:function(){
var updates=this.props.data.map(function(update, index)
{
return(
<div className="feedBody" key={update.created}>
<img src={update.profile_pic} className="feedImg" />
<div className="feedText">
<b>{update.name}</b> 
<span dangerouslySetInnerHTML={this.textToLink(update.user_update)}  />     
</div>
<CommentBlock  dataComentsBlock={update.comments} updateID={update.update_id}/>
<a href="javascript:void(0)" className="feedDelete" value={index} data={update.update_id} onClick={this.props.deleteUpdate} >Delete</a>

</div>
    )
  }, this);
  return(
   <div id="wallFeed">
      {updates}
     </div>
  );
  },
})

module.exports=WallUpdates;