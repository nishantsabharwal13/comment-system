<?php
include 'db.php';
if($_POST['user_update'] && $session)
{
$a="ankur";
$c="Ankur Aggarwal";
$b=$_POST['user_update'];
$t=time();
echo '{
  "updates": [
    {
      "user_id": "7",
      "username": "'.$a.'",
      "name": "'.$c.'",
      "profile_pic": "https://scontent-sit4-1.xx.fbcdn.net/v/t31.0-8/s960x960/17191707_10155206204990087_2321231949454258944_o.jpg?oh=6b023f0708b2b1f68da4b717001a1401&oe=599AF781",
      "update_id": "'.$t.'",
      "user_update": "'.$b.'",
      "created": "'.$t.'",
      "commentCount": 0,
      "comments": []
    }
  ]
}';
}

?>
