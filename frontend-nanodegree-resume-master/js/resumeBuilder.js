
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
                "location":"Taybe city, 24 southern quarters."
      },
  "skills":["oud player", "clever", "awesome", "human", "friendly"],
  "image":"images/me.jpg",
  "welcomeMessage":"Welcome to my amazing website"
};

var projects = {
    "projects": [
        {
            "title": "capston project",
            "date": "2015",
            "description": "this was graduation project and made to help people in sitting in correct positions.",
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






















