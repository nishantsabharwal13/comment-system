var React = require('react');
var WallFeed = require('./WallFeed');
var WallContainer=React.createClass({
   render:function(){
    return(
    <div id="wallContainer">
     <WallFeed url="php/newsFeed.php" postUrl="php/updateFeed.php" deleteUrl="php/deleteUpdate.php"/>
    </div>
    );
   }
});

module.exports = WallContainer;