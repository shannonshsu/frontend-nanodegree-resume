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

var work = {
	"jobs": [
	{
		"employer": "Employer Here",
		"title": "City Here",
		"location": "Location Here",
		"dates": "Dates Here",
		"description": "Description Here line 1 \
		line 2 \
		line 3"
	},
	{
		"employer": "Employer Here",
		"title": "City Here",
		"location": "Location Here",
		"dates": "Dates Here",
		"description": "Description Here"
	}
	],
	display: function() {}
};

var projects = {
	"project": [
	{
		"title": "Project Title",
		"dates": "Date Here",
		"description": "Description Here",
		"images": ["URL1", "URL2", "URL3"]
	},
	{
		"title": "Project Title 2",
		"dates": "Date Here 2",
		"description": "Description Here 2",
		"images": ["URL1", "URL2", "URL3"]
	}
	],
	display: function() {}
};

var bio = {
	"name": "Shannon Hsu",
	"role": "Role Here",
	"welcomeMessage": "Welcome Message here",
	"contacts": {
		"mobile": "6269757618",
		"email": "shannonshsu@gmail.com",
		"github": "github.com/shannonshsu",
		"location": "Arcadia"
	},
	"skills": ["skill 1", "skill2", "skill3"],
	"biopic": "picurl",
	display: function() {}
};


var myRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(myRole);


var myName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(myName);

for (var contactMethod in bio.contacts) {
var myContact = HTMLcontactGeneric.replace("%contact%", contactMethod);
myContact = myContact.replace("%data%", bio.contacts[contactMethod]); 
$("#topContacts").append(myContact);
}




/*
var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
$(".work-entry:last").append(formattedLocation);
*/
