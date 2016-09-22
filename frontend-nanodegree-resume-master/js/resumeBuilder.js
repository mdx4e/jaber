var formattedName = HTMLheaderName.replace("%data%", "Muhammad");
var formattedRole = HTMLheaderRole.replace("%data%", "Engineer");

$("#header").append(formattedName);
$("#name").append(formattedRole);

var skills = ["oud player", "clever", "awesome", "human"];
var url = "images/me.jpg";

var bio = {
  "Name":"Muhammad",
  "Role":"Computer Engineer",
  "Contact":"taybeh city 24 strret.",
  "Skills":skills,
  "Image":url
};

