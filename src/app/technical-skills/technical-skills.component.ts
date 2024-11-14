import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css']
})
export class TechnicalSkillsComponent implements OnInit {

  public skills:string[];

  constructor() { 
    this.skills = [
      'PHP', 'Typescript', 'SQL', 'PostgreSQL', 'Magento', 'Nginx', 'FreeBSD', 'Ubuntu',
      'Postfix', 'PGP', 'Wordpress', 'Bash', 'CSS', 'OOP', 'Design Patterns'
    ];
  }

  ngOnInit(): void {
    this.skills.sort(function (a:string, b:string){
      return a.localeCompare(b); 
    });
  }


}
