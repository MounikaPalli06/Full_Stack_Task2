<?php

$username = $_GET['username'];
$existingUsers = ["admin","apex","test","john"];
if(in_array(strtolower($username), $existingUsers))
{
  echo "<span style='color:red'>Username already exists</span>";
}
else
{

  echo "<span style='color:green'>Username available</span>";
}

?>