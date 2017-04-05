<?php
include 'db.php';
if($session)
{
echo '{
  "updates": [
    {
      "user_id": "1",
      "username": "nishant",
      "name": "Nishant Sabharawal",
      "profile_pic": "https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/14462911_10154633447830087_4978973781409464502_n.jpg?oh=23626f0cf7d2f4a903c37914d3e3ab33&oe=5995734C",
      "update_id": "62",
      "user_update": "This is a cool comment system",
      "created": "1464062121",
      "commentCount": 2,
      "comments": [
        {
          "com_id": "62",
          "uid_fk": "80",
          "comment": "Looks good",
          "created": "1468871427",
          "like_count": "0",
          "uploads": "",
          "username": "rajeev",
          "name": "Rajeev Singh",
          "profile_pic": "https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/269142_10150291541150087_1432646_n.jpg?oh=374dafcb0e1b502d34e56a5a8bc0640e&oe=5965AE73",
          "timeAgo": "2016-07-18T21:50:27+02:00"
        },
        {
          "com_id": "72",
          "uid_fk": "221",
          "comment": "Edit and like features coming soon",
          "created": "1469053420",
          "like_count": "0",
          "uploads": "",
          "username": "nishant",
          "name": "Nishant Sabharwal",
          "profile_pic": "https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/14462911_10154633447830087_4978973781409464502_n.jpg?oh=23626f0cf7d2f4a903c37914d3e3ab33&oe=5995734C",
          "timeAgo": "2016-07-21T00:23:40+02:00"
        }
        ,
        {
          "com_id": "712",
          "uid_fk": "221",
          "comment": "Can use in my application",
          "created": "1469053426",
          "like_count": "0",
          "uploads": "",
          "username": "anjali",
          "name": "Anjali Gupta",
          "profile_pic": "https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/260414_10150284571460087_1759266_n.jpg?oh=307f43c0b04129160422a0ca71e7679d&oe=5961E1D3",
          "timeAgo": "2016-07-21T00:23:40+02:00"
        }
      ]
    },
    {
      "user_id": "2",
      "username": "farhan",
      "name": "Farhan Ahmad",
      "profile_pic": "https://scontent-sit4-1.xx.fbcdn.net/v/t31.0-8/s960x960/14188408_10154574639265087_5429203616426999914_o.jpg?oh=67829f732fd6fedbdbc6ed807920744a&oe=5963FA04",
      "update_id": "50",
      "user_update": "Lets go out on a trip",
      "created": "1417551613",
         "commentCount": 2,
      "comments": [
        {
          "com_id": "262",
          "uid_fk": "80",
          "comment": "How about ladakh ?",
          "created": "1468871427",
          "like_count": "0",
          "uploads": "",
          "username": "mohit",
          "name": "Mohit Kaul",
          "profile_pic": "https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/14462911_10154633447830087_4978973781409464502_n.jpg?oh=23626f0cf7d2f4a903c37914d3e3ab33&oe=5995734C",
          "timeAgo": "2016-07-18T21:50:27+02:00"
        },
        {
          "com_id": "272",
          "uid_fk": "221",
          "comment": "Spiti valley is much better option",
          "created": "1469053420",
          "like_count": "0",
          "uploads": "",
          "username": "shahbaz",
          "name": "Shahbaz Narulla",
          "profile_pic": "https://scontent-sit4-1.xx.fbcdn.net/v/t31.0-8/s960x960/14188408_10154574639265087_5429203616426999914_o.jpg?oh=67829f732fd6fedbdbc6ed807920744a&oe=5963FA04",
          "timeAgo": "2016-07-21T00:23:40+02:00"
        }
      ]
    }
 
  ]
}';

}

?>