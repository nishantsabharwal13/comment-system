var React = require('react');
var WallFeed = require('./WallFeed');
var WallContainer=React.createClass({
   render:function(){
    return(
    <div id="wallContainer">
     <WallFeed url="api/newsFeed.php" postUrl="api/updateFeed.php" deleteUrl="api/deleteUpdate.php"/>
    </div>
    );
   }
});

module.exports = WallContainer;