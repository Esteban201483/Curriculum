/**
 * This file contains all the projects which I have collaborated.
 * TODO: connect to the backend
 */

 import {ProjectClass} from './project';

 export const PROJECTS: ProjectClass[] = 
 [
	{id: 0, name: "Portfolio Website", nameEs: "Sitio de Portafolio", summary: "Displays my contact information, technical skills, projects, certificates and certifications", 
		summaryEs: "Despliega información sobre mis proyectos, certificados, certificaciones y habilidades técnicas",
	description: "Personal website to add information about the projects in which I participated. The projects data is stored in a Typescript exported array and is obtained by the" + 
	" components using the Observer design pattern.", 
	technologies: ["Angular", "Javascript (Front End)"], 
	tags: ["PHP", "Javascript (Front End)","Bootstrap"],
	repository: "https://github.com/Esteban201483/Curriculum",
	previewImageURL: "./assets/projects/portfolio.jpg",
	order: 3},


	 {id: 2, name: "Labyrinth Game Implementation using Websockets", nameEs: "Implementación del Juego del Laberinto con Websockets" ,summary: "Implementation of Labyrinth Game that supports 4 players",
		summaryEs: "Implementación del juego del laberinto con soporte para 4 jugadores",  
	 description: "The game consists in a board of nXm size filled with treasures, in which each board token is a way that allows movement in certains directions. Each player have five treasures " +
	 "assigned, but the players can only see their wanted treasure. Also, each nth odd row and column have and arrow that allows insertions in that position.\n\n" +
	 "The game's objective is to capture all the assigned treasures. Each turn consists of two steps. The first step is to realice an insertion. The token board to insert will be an random" +
	 " token in the first turn. When the player realice an insertion, the inserted token will realice an offset, what will expulse a token of the board. The expulsed token board will be the" +
	 " inserted token board of the next turn. The second step of the game is to move to an allowed position. If the player moves to the same position than his searched treasure, then the" +
	 " treasure will be captured and the next treasure will be asigned\n\n" +
	 " In order to play, the player have to create or join to a game room. Either choices requiere that user input a name. If the player create a game room, then he or she has to indicate the"
	 +" players ammount and board size. When a game room is created, a random ID will be generated and the user must share this ID with the people that he wants to join, in order to avoid stranger players\n\n" +
	 "When all the requiered players joins the game room, the games starts automatically.\n\n This web game was the Application Web course's project.\n\n This project was developed in pairs"
	 , technologies: ["Javascript (Front End) with Express Framework","Javascript (Back End)", "Socket.io", "JQuery","Bootstrap"], 
	 tags: [],
	 repository:"https://github.com/Esteban201483/appweb20a-Esteban-Joel.git",
	 previewImageURL: "./assets/placeholder.png",
	 order: 3},
	
	 {id: 3, name: "Course Management System", nameEs: "Sistema de Administración de Cursos", summary: "This systems allows the managent of courses, students, grades and professors.",
	 summaryEs: "Este sistema administra cursos, estudiantes, calificaciones y profesores.",  
	 description: "A website that allows the creation of courses and dynamic forms to register in a course. Each dynamic form is composed of questions present in the database, and the" + 
	 "system administrator can create forms using that questions. This project was developed under Engineering Software course, in a six members team based.",
	  technologies: ["PHP", "Javascript (Front End)","Bootstrap","Apache", "Oracle DBMS", "JIRA for project management",
	  ], tags: [],
	  repository:"https://github.com/Blightning97/Registro-OTS",
	  previewImageURL: "./assets/placeholder.png",
	  order: 3},
	 
	 {id: 4, name: "Studying spaces searching App", nameEs: "Application en Android para crear espacios de estudio", summary: "This App allows the registering of studying spaces. An Integration with Google Maps allows the users to find spaces easily",
		summaryEs: "Esta App permite la creación de espacios de estudio. Utiliza Google Maps para facilitar la especificación de ubicaciones",  
	 description: "This app allows the user to create studying spaces inside an university, in order to let other students to join the studying space and made comments.\n\n" +
	 "The Google Maps API is used to display all studying spaces, using the bookmark functionality. Also, uses points established by latitude and longitude to create a polygon to avoid"+
	 " the creation of studying spaces outside the university\n\n" + 
	 " In order to made a commentary, the user must send a joining request to the creator. If the creator accepts the request then the user is allowed to made commentaries in that"
	 + "studying space \n\n" + 
	 "Recycler Views and ListViews are used in order to display commentaries and users joined in the studying space.\n\n" +
	 "This project was developer under five members team.", 
	 technologies: ["Java, for Android development","Firebase","Google Maps API", "JIRA for project management"], tags: [],
	 repository:"",
	 previewImageURL: "./assets/placeholder.png",
	 order: 3},

	 {id: 5, name: "Human Resources Management System", nameEs: "Sistema de Administración para Recursos Humanos", summary: "This system manages Employees, Abscenses, Performance Review and Training",
		summaryEs: "Administra empleados, ausencias, revisiones de rendimiento y material para crecimiento profesional", 
		description: "This app allows the user to create studying spaces inside an university, in order to let other students to join the studying space and made comments.\n\n" +
		"This system manages many aspects related to planilla: Abscenses, Vacations, Departments, Performance Review, Email Accounts and Employee Information \n\n" + 

		"", 
		technologies: ["PHP", "Angular", "MySQL", "PrimeNG"], tags: [],
		repository:"",
		previewImageURL: "./assets/projects/hrtool.png",
		order: 5},
	{id: 5, name: "American Furniture Webshop using Magento", nameEs: "Tienda Web para una mueblería estadounidense en Magento", summary: "Webshop was developed in Magento, for an important client in the furniture industry",
		summaryEs: "Tienda en línea creada en Magento para un importante cliente estadounidense de la industría de los muebles ", 
		description: "This app allows the user to create studying spaces inside an university, in order to let other students to join the studying space and made comments.\n\n" +
		"This system manages many aspects related to planilla: Abscenses, Vacations, Departments, Performance Review, Email Accounts and Employee Information \n\n" + 

		"", 
		technologies: ["Magento", "JQuery", "MariaDB", "Docker"], tags: [],
		repository:"",
		previewImageURL: "./assets/placeholder.png",
		order: 5}
]