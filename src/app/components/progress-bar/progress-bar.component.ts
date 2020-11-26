import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {


  public available = 85
  constructor() { }

  ngOnInit(): void {
   // this.loadProgressBar()
  }

  loadProgressBar(){
    for (let i=0;i<100;i++){
      this.available += 1
    }
  }

}
