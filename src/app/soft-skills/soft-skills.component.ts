import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent implements OnInit {

  public skills:string[];


  constructor(){ 
    this.skills = [
      'Autodidact', 'Meticulous', 'Team Work Oriented', 'Adaptability', 'Creativity'
    ];
  }

  ngOnInit(): void {
  }

}
