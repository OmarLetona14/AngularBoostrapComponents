import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'boostrap-components';

  constructor(private router:Router, private spinner: NgxSpinnerService) { }

  ngOnInit():void{
    this.spinner.show();
    this.router.navigate(['/home']);
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      
    }, 3000);
  }
}
