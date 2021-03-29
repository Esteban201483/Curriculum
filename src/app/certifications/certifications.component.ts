import { Component, OnInit } from '@angular/core';
import { Certification} from '../certification';
import { CertificationsService} from '../certifications.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

	certifications: Certification[];

	constructor(private certificationsService: CertificationsService) { }

  ngOnInit(): void {
	this.getCertifications();
  }

  getCertifications(): void
	{
		this.certificationsService.getCertifications().subscribe(
			certifications => this.certifications = certifications
		);
		
	}
}
