import { Component, OnInit } from '@angular/core';
import * as progressBar from 'progressbar.js'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  container:any= {}
  constructor() { 
    this.container = document.getElementById('container');
  }

  ngOnInit(): void {

  }

}
