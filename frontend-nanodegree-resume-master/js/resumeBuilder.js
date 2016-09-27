
var work = {
    "jobs": [{
         "employer": "Google",
         "title": "Developer",
         "location": "Haifa",
         "dates": "2010-2010",
         "description": "I have developed many application to help people in advancing their living quality."
    },
    {
         "employer": "Intel",
         "title": "Developer",
         "location": "Haifa",
         "dates": "2012-2014",
         "description": "I have developed many application to advance the industry here."
    }
        ]
};

var education = {
    "schools": [
        {
            "name":"Atid High School",
            "degree":"High school degree",
            "location": "Taybah",
            "major": ["physics","computer science"],
            "date": "2005-2007",
            "information": "this major is one of the best once!",
            "url":"www.atid.co.il"
        },
        {
            "name":"Bahcesehir university",
            "degree":"B.SC Computer Engineer",
            "location": "istanbul",
            "major": ["computer engineering"],
            "date": "2011-2015",
            "information": "this major is so exciting major!",
            "url":"http://ios.bahcesehir.edu.tr"
        }
    ],
    "onlineCourses": [
        {
            "title": "CMPE",
            "school":"Bahcesehir University",
            "date":"2014",
            "url":"http://ios.bahcesehir.edu.tr/",
            "faculty": "engineering",
            "lecturere": "jaber"
        }
    ]
};

var bio = {
  "name":"Muhammad",
  "role":"Computer Engineer",
  "contact": { "mobile":"0503235331",
                "email":"muhammad.sce@gmail.com",
                "github":"mdx4e",
                "twitter":"muhammad.sce",
                "Location":"Taybe city, 24 southern quarters."
      },
  "skills":["oud player", "clever", "awesome", "human", "friendly"],
  "image":"images/me.jpg",
  "welcomeMessage":"Welcome to my amazing website"
};

var proj = {
    "projects": [
        {
            "title": "capston project",
            "date": "2015",
            "Description": "this was graduation project and made to help people in sitting in correct positions.",
            "images": [
                "images/20150506_161821.jpg",
                "images/20150507_124823.jpg",
                "images/20150523_221012.jpg",
                "images/20150507_125421.jpg",
                "images/20150523_230314.jpg",
                "images/20150427_080901.jpg",
                "images/20150503_170426.jpg",
                "images/20150506_161821.jpg"
            ]
        }
    ]
};


if(bio.skills.length > 0){
      var fskill;
      $("#header").append(HTMLskillsStart);
      for(var i = 0; i < bio.skills.length; i++){
        fskill = HTMLskills.replace("%data%",bio.skills[i]);
        $("#skills").append(fskill);
      }
    }

for(job in work.jobs)
{
    $("#workExperience").append(HTMLworkStart);
    var formatHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formatHTMLworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var cocat = formatHTMLworkEmployer + formatHTMLworkTitle;
    $(".work-entry:last").append(cocat);
    
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedImage = HTMLbioPic.replace("%data%", bio.image);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedImage);
$("#header").append(formattedWelcomeMessage);


var formattedMobile = HTMLmobile.replace("%data%", bio.contact[0]);
var formattedEmail = HTMLemail.replace("%data%", bio.contact[1].email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.Location);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);

$("#header").append(HTMLcontact);
$("#contacts").append(formattedMobile);
$("#contacts").append(formattedEmail);
$("#contacts").append(formattedGithub);
$("#contacts").append(formattedLocation);
$("#contacts").append(formattedTwitter);

//  $("#projects").append(HTMLprojectStart);

// var formattedProjTitle =  HTMLprojectTitle.replace("%data%",proj.projects.title);
// var formattedProjDates = HTMLprojectDates.replace("%data%",proj.projects.date);
// var formattedProjDescription = HTMLprojectDescription.replace("%data%",proj.projects.Description);
//  $(".project-entry").append(formattedProjTitle);
// $(".project-entry").append(formattedProjDates);
// $(".project-entry").append(formattedProjDescription);
                           
//  var formattedProjImage;
// for(var item in proj.projects.images){
//     formattedProjImage = HTMLprojectImage.replace("%data%",proj.projects.images[item]);
//     $(".project-entry").append(formattedProjImage);
// }

















