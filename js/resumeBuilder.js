var bio = {
	"name": "Shannon Hsu",
	"role": "Role Here",
	"welcomeMessage": "Welcome Message here",
	"contacts": {
		"mobile": "(626) 975-7618",
		"email": "shannonshsu@gmail.com",
		"github": "shannonshsu",
		"location": "Arcadia, CA"
	},
	"skills": ["Skill 1", "Skill 2", "Skill 3"],
	"biopic": "http://placehold.it/350x350",
	display: function() {}
};

var work = {
	"jobs": [
	{
		"employer": "Urtu/NiuPiao",
		"title": "Founder & CEO",
		"location": "Williamstown, MA",
		"dates": "Jan 2015 - Aug 2015",
		"description": "Description Here" 
	},
	{
		"employer": "Barclays Capital",
		"title": "Investment Banking Analyst",
		"location": "Hong Kong",
		"dates": "Jun 2014 - Aug 2014",
		"description": "Description Here"
	}
	],
	display: function() {
		for (var job in work.jobs) {
			var jobObjectInArray = work.jobs[job];
			var jobStart = HTMLworkStart.replace("</div>", "");
			var jobEnd = "</div>";

			var jobEmployer = HTMLworkEmployer.replace("%data%", jobObjectInArray.employer);
			var jobTitle = HTMLworkTitle.replace("%data%", jobObjectInArray.title);
			var jobDates = HTMLworkDates.replace("%data%", jobObjectInArray.dates);
			var jobLocation = HTMLworkLocation.replace("%data%", jobObjectInArray.location);
			var jobDescription = HTMLworkDescription.replace("%data%", jobObjectInArray.description);

			$("#workExperience").append(jobStart + jobEmployer + jobTitle + 
				jobDates + jobLocation + jobDescription + jobEnd);
		}
	}
};

var projects = {
	"project": [
	{
		"title": "Project Title",
		"dates": "Date Here",
		"description": "Description Here",
		"images": ["http://placehold.it/250x150", "http://placehold.it/250x150", "http://placehold.it/250x150"]
	},
	{
		"title": "Project Title 2",
		"dates": "Date Here",
		"description": "Description Here",
		"images": ["http://placehold.it/250x150", "http://placehold.it/250x150", "http://placehold.it/250x150"]
	}
	],

	display: function() {
		for (var singleProject in projects.project) {
			var projectObjectInArray = projects.project[singleProject];
			var projectStart = HTMLprojectStart.replace("</div>", "");
			var projectEnd = "</div>";

			var projectTitle = HTMLprojectTitle.replace("%data%", projectObjectInArray.title);
			var projectDates = HTMLprojectDates.replace("%data%", projectObjectInArray.dates);
			var projectDescription = HTMLprojectDescription.replace("%data%", projectObjectInArray.description);

			var projectImages = (function() {
				var runningString = "";
				for (var imageURLIndex in projectObjectInArray.images) {
					runningString += HTMLprojectImage.replace("%data%", projectObjectInArray.images[imageURLIndex]);
				}
				return runningString;
			})();

			$("#projects").append(projectStart + projectTitle + projectDates + 
				projectDescription + projectImages + projectEnd);
		}
	}
};

var education = {
	"schools": [
	{
		"name": "Williams College",
		"location": "Williamstown",
		"majors": "Mathematics",
		"dates": 2015,
		"url": "url here",
		"courses": "courses here"
	},
	{
		"name": "Arcadia High School",
		"location": "Arcadia",
		"dates": 2011,
		"url": "ausd.net"
	}
	],
	"onlineCourses": [
	{
		"title": "course title",
		"school": "udacity",
		"dates": 2015,
		"url": "url here"
	}
	],
	display: function() {}
};

/* header */

var myRole = HTMLheaderRole.replace("%data%", bio.role);
var myName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(myRole);
$("#header").prepend(myName);

/* contact info */

for (var contactMethod in bio.contacts) {
	var myContact = HTMLcontactGeneric.replace("%contact%", contactMethod);
	myContact = myContact.replace("%data%", bio.contacts[contactMethod]); 
	$("#topContacts").append(myContact);
}

/* bio */

var myPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(myPic);
var myWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(myWelcomeMessage);

/* skills */

var skillStart = HTMLskillsStart.replace("</ul>", "");
var skillEnd = "</ul>";
$("#header").append(skillStart);
for (var skill in bio.skills){
	var mySkill = HTMLskills.replace("%data%", bio.skills[skill]);
	$("#header").append(mySkill);
}
$("#header").append(skillEnd);



work.display();
projects.display();
$('#mapDiv').append(googleMap);



/*
var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
$(".work-entry:last").append(formattedLocation);
*/
