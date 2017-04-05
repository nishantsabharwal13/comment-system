var React = require('react');
var WallForm = require('./WallForm');
var WallUpdates = require('./WallUpdates');
var axios = require('axios');
var qs = require('qs');

var WallFeed=React.createClass({
  getInitialState:function(){
   return {data: []};
 },
 updateAjaxSubmit: function(update)
 {
  var reactThis=this;

  axios.post(this.props.postUrl,qs.stringify(update))
  .then(function (data) {
    var updates = reactThis.state.data;
    var newUpdates = [data.data.updates[0]].concat(updates);
    reactThis.setState({data: newUpdates});
  })
  .catch(function (error) {
    console.log(error);
  });

},
updatesFromServer: function() 
{

  var data='';
  var reactThis=this;

  axios.post(this.props.url,data)
  .then(function (data) {
    reactThis.setState({data: data.data.updates});
  })
  .catch(function (error) {
    console.log(error);
  });
},
deleteUpdate: function(e) 
{
  var updateIndex=e.target.getAttribute('value');

  var update_id=e.target.getAttribute('data');

  var data='updateID='+update_id;
  var reactThis=this;

  axios.post('api/deleteUpdate.php',data)
  .then(function (data) {
    reactThis.state.data.splice(updateIndex,1);
    reactThis.setState({data: reactThis.state.data});
  })
  .catch(function (error) {
    console.log(error);
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