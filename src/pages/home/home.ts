import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {ContactPage} from '../contact/contact'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contactos: any;
  paginaContacto = ContactPage;
  constructor(public navCtrl: NavController, public http: HttpClient ) {
    this.http.get('/Contactos')
    .subscribe(data => {
       this.contactos = data;
       console.log(JSON.stringify(data));
     }, error => {
       console.log('fallo la conexion');
     });
  }

  ionViewWillEnter()
  {
    
  }

}
