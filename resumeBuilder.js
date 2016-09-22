var awesomeThoughts = "i am AWE";
var funThoughts = awesomeThoughts.replace("AWE", "FUN");

$("#main").append(funThoughts);

var HTMLname = "<li><span>%data%</span></li>";
var HTMLrole = "<li><span>%data%</span></li>";

var formattedName = HTMLname.replace("%data%", "Muhammad");
var formattedRole = HTMLrole.replace("%data%, "Engineer");

$("#header").append(formattedName);
$("#header").append(formattedRole);
