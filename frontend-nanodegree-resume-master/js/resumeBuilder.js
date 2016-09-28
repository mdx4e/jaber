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
  "name":"muhammad jaber",
  "role":"Computer Engineer",
  "contact": { "mobile":"0503235331",
                "email":"muhammad.sce@gmail.com",
                "github":"mdx4e",
                "twitter":"muhammad.sce",
                "location":"Israel"
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

bio.display = function(){
    if(bio.skills.length > 0){
      var fskill;
      $("#header").append(HTMLskillsStart);
      for(var i = 0; i < bio.skills.length; i++){
        fskill = HTMLskills.replace("%data%",bio.skills[i]);
        $("#skills").append(fskill);
      }
    }
    $("#header").append(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").append(HTMLbioPic.replace("%data%", bio.image));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#header").append(HTMLcontact);
    $("#conts").append(HTMLmobile.replace("%data%", bio.contact.mobile));
    $("#conts").append(HTMLemail.replace("%data%", bio.contact.email));
    $("#conts").append(HTMLgithub.replace("%data%", bio.contact.github));
    $("#conts").append(HTMLlocation.replace("%data%", bio.contact.location));
    $("#conts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));
}

work.display = function(){
    for(job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var formatHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formatHTMLworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var cocat = formatHTMLworkEmployer + formatHTMLworkTitle;
        $(".work-entry:last").append(cocat);    
    }
}


proj.display = function(){
    $("#projects").append(HTMLprojectStart);
    $(".project-entry").append(HTMLprojectTitle.replace("%data%", proj.projects[0].title));
    $(".project-entry").append(HTMLprojectDates.replace("%data%", proj.projects[0].date));
    $(".project-entry").append(HTMLprojectDescription.replace("%data%", proj.projects[0].Description));

    for(var item in proj.projects[0].images){
        $(".project-entry").append(HTMLprojectImage.replace("%data%", proj.projects[0].images[item]));
    }
}

eduction.display = function(){
    for(var school in education.schools){
        $("#education").append(HTMLschoolStart);
        $(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[school].name));
        $(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
        $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[school].date));
        $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
        $(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[school].major));
    }
    $("#education").append(HTMLonlineClasses);
    $("#onc").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[0].title));
    $("#onc").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[0].school));
    $("#onc").append(HTMLonlineDates.replace("%data%", education.onlineCourses[0].date));
    $("#onc").append(HTMLonlineURL.replace("%data%", education.onlineCourses[0].url));
}
        
$("#mapDiv").append(googleMap);

function inName(){
    var arr = bio.name.split(" ");
    var internationalized = arr[0].charAt(0).toUpperCase() + arr[0].slice(1).toLowerCase() + " " + arr[1].toUpperCase();
    bio.name = internationalized;
    document.getElementById("name").innerHTML = bio.name;
}
        
bio.display();
work.display();
proj.display();
education.disply();
inName();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
  logClicks(x,y);
});







