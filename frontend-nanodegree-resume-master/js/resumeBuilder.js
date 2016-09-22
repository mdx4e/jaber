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
  "Image":url,
  "Message":"Welcome to my amazing website"
};


var fName = HTMLheaderName.replace("%data%", bio.Name);
$("#header").append(fName);
var fRole = HTMLheaderRole.replace("%data%", bio.Role);
$("#header").append(fRole);
var fSkills = HTMLskills.replace("%data%", bio.skills);
$("#header").append(fSkills);
var fImg = HTMLbioPic.replace("%data%", bio.Image);
$("#header").append(fImg);
var fMsg = HTMLwelcomeMsg.replace("%data%", bio.Message);
$("#header").append(fMsg);
