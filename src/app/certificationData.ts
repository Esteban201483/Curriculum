/**
 * This file contains all my certifications
 * TODO: use Database, possibly Mongo
 */

 import {Certification} from './certification';

 export const CERTIFICATIONS: Certification[] = 
 [
	{
		id: 0,
		name: "ScrumFoundation",
		type: "Certification",
		certification_url: "assets/certifications/scrumFoundation.pdf",
		logo_url: "image_url"

	},
	{
		id: 1,
		name: "Cisco introduction to Cybersecurity",
		type: "Course completion",
		certification_url: "assets/certifications/introductionToSecurity.pdf",
		logo_url: "image_url"

	},
	{
		id: 1,
		name: "Linux Essentials",
		type: "Course completion",
		certification_url: "assets/certifications/LinuxEssentialCompletion.pdf",
		logo_url: "image_url"

	},
	{
		id: 4,
		name: "MongoDB Basic",
		type: "Course completion",
		certification_url: "https://university.mongodb.com/course_completion/55ca7eaa-706f-4e06-8496-e5ea0c893393",
		logo_url: "image_url"

	},
	{
		id: 5,
		name: "MongoDB for Javascript Developers",
		type: "Course completion",
		certification_url: "https://university.mongodb.com/course_completion/de2bf3f8-65f5-45be-97a3-3eead4356aea",
		logo_url: "image_url"
	},
	{
		id: 6,
		name: "Videogames Development using Godot",
		type: "Course completion",
		certification_url: "assets/certifications/Esteban Rojas - Desarrollo Videojuegos Godot.pdf",
		logo_url: "image_url"
	}
]