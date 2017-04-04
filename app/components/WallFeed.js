var React = require('react');
var WallForm = require('./WallForm');
var WallUpdates = require('./WallUpdates');

var WallFeed=React.createClass({
  getInitialState:function(){
   return {data: []};
  },
 updateAjaxSubmit: function(update)
  {
    var reactThis=this;
    ajaxPostReact(this.props.postUrl, update , reactThis, function(data){
       var updates = reactThis.state.data;
       var newUpdates = [data.updates[0]].concat(updates);
       reactThis.setState({data: newUpdates});
    });
  },
  updatesFromServer: function() 
  {
    var data='';
    var reactThis=this;
    ajaxPostReact(this.props.url, data , reactThis, function(data){
    reactThis.setState({data: data.updates});
    });
  },
deleteUpdate: function(e) 
{
var updateIndex=e.target.getAttribute('value');

var update_id=e.target.getAttribute('data');

    var data='updateID='+update_id;
    var reactThis=this;
    ajaxPostReact('php/deleteUpdate.php', data , reactThis, function(data){
     reactThis.state.data.splice(updateIndex,1);
     reactThis.setState({data: reactThis.state.data});
    });
},
componentDidMount:function(){
this.updatesFromServer();
},
  render:function(){
  return(
      <div>
      <WallForm onUpdateSubmit={this.updateAjaxSubmit}/>
      <WallUpdates data={this.state.data} commentLink={this.commentLink} deleteUpdate={this.deleteUpdate}/>
      </div>
  );
  }
});

module.exports = WallFeed;