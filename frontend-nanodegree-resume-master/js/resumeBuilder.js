// var skills = ["oud player", "clever", "awesome", "human", "friendly"];
// var url = "images/me.jpg";

// var bio = {
//   "Name":"Muhammad",
//   "Role":"Computer Engineer",
//   "Contact":"taybeh city 24 strret.",
//   "Skills":skills,
//   "Image":url,
//   "Message":"Welcome to my amazing website"
// };


// var fName = HTMLheaderName.replace("%data%", bio.Name);
// $("#header").append(fName);
// var fRole = HTMLheaderRole.replace("%data%", bio.Role);
// $("#header").append(fRole);
// var fSkill;
// for(var i = 0; i < 5; i++)
// {
//   fSkill = HTMLskills.replace("%data%", bio.Skills[i]);
//   $("#header").append(fSkill);
// }
// var fImg = HTMLbioPic.replace("%data%", bio.Image);
// $("#header").append(fImg);
// var fMsg = HTMLwelcomeMsg.replace("%data%", bio.Message);
// $("#header").append(fMsg);




var work = {
};

work.position = "developer";
work.employer  = "seemplex";
work.yearsWorked = "1";
work.city = "hartzelia";

var education = {
};

education["name"] = "Bahcesehir university";
education["yearsAttending"] = "5";

$("#main").append(work["position"]);
$("#main").append(education.name);
















