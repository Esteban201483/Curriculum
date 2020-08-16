/**
 * This file contains all the projects developed by myself.
 * TODO: use Database, possibly Mongo
 */

 import {Project} from './project';

 export const PROJECTS: Project[] = 
 [
	 {id: 1, name: "Request Management System", summary: "A very nice project jeje", description: "A very long text goes here", 
	 technologies: ["PHP with PHPCake Framework", "Javascript (Front End)", "Bootstrap", "JQuery", "MySQL"], 
	 tags: ["PHP", "Javascript (Front End)","Bootstrap"]},
	 {id: 2, name: "Labyrinth Game Web Implementation", summary: "A very nice project jeje", description: "A very long text goes here", technologies: [], 
	 tags: ["Javascript (Front End)","Javascript (Back End)", "Socket.io", "JQuery","Bootstrap"]},
	 {id: 3, name: "Course Management System", summary: "A very nice project jeje", description: "A very long text goes here", technologies: [], tags: ["PHP", "Javascript (Front End)","Bootstrap"]},
	 {id: 4, name: "Studying spaces searching App", summary: "A very nice project jeje", description: "A very long text goes here", technologies: [], tags: ["Android","Firebase","Google Maps API"]}
 ]