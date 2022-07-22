import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router, public modalCtrl: ModalController,) { }

  login() {
    this.router.navigate(['home'])
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
  
  ngOnInit() {
  }

}
