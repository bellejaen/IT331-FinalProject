import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  activeTab: string = 'chats'
  constructor() { }

  segmentChange(e){
    this.activeTab = e.target.value;
  }
  ngOnInit() {
  }

}
