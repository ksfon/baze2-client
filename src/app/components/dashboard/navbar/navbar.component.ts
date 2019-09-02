import { Component, OnInit, Renderer2, ElementRef, Input } from '@angular/core';
import {Subscription } from 'rxjs';
import { MessageServiceService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  subscription: Subscription;
activeTab='navItem1';
  constructor(private renderer: Renderer2, private el: ElementRef,
    private messageService: MessageServiceService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      console.log(message.text);
      switch (message.text) {
        case 'navItem1': this.activeTab = message.text; break;
        case 'navItem2': this.activeTab = message.text; break;
        case 'navItem3': this.activeTab = message.text; break;
        default: this.activeTab = 'navItem1';
      }
    });

  }

  ngOnInit() {

    this.renderer.setStyle(document.body, 'background-image',
      'url(https://images.unsplash.com/photo-1483450388369-9ed95738483c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)');

    this.renderer.setStyle(document.body, ' background-size', 'covers');
  }

  changeActiveTab(event: any) {
    this.activeTab = event.srcElement.parentElement.id.toString();
  }


}
