import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-aboutus-page',
  templateUrl: './aboutus-page.component.html',
  styleUrls: ['./aboutus-page.component.css']
})
export class AboutusPageComponent implements OnInit {

  constructor(private router:Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.router.navigate(['/home']);
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      
    }, 5000);
  }


}
