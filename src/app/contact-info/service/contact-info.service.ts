import { Injectable } from '@angular/core';
import {of, Observable} from 'rxjs';


import { contactItems } from './../contactInfoData';
import { ContactItemInterface } from '../model/ContactItemInterface';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

  constructor() { }

  getContactInfoItems(): Observable<ContactItemInterface[]>{
    return of(contactItems);
  }
  /*getProject(id: number): Observable<ContactItemClass>{
	  return of(contactItems.find(project => project.id === id));
  }*/

}
