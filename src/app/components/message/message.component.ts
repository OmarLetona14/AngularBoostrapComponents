import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  contacts = this.contactService.contacts;
  constructor(private contactService:ContactService) { }
  filterName:string = '';
  ngOnInit(): void {
  }

}
