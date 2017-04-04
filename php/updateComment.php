<?php
include 'db.php';
if($_POST['user_comment'] && $_POST['updateID']  && $session)
{
$b=$_POST['user_comment']; 
$d=$_POST['updateID']; 
$t=time();
echo '{
  "comments": [
    {
          "com_id": "'.$t.'",
          "uid_fk": "'.$d.'",
          "comment":"'.$b.'",
          "created": "'.$t.'",
          "like_count": "0",
          "uploads": "",
          "username": "ankut",
          "name": "Ankur Aggarwal",
          "profile_pic": "https://scontent-sit4-1.xx.fbcdn.net/v/t31.0-8/s960x960/17191707_10155206204990087_2321231949454258944_o.jpg?oh=6b023f0708b2b1f68da4b717001a1401&oe=599AF781",
          "timeAgo": "2016-07-18T21:50:27+02:00"
        }
  ]
}';

}

?>
