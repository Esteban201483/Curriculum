import { Injectable } from '@angular/core';
import {of, Observable} from 'rxjs';

import { Certification } from './certification';
import { CERTIFICATIONS } from './certificationData';

@Injectable({
  providedIn: 'root'
})
export class CertificationsService {

  constructor() { }

  getCertifications(): Observable<Certification[]>{
    return of(CERTIFICATIONS);
  }
}
