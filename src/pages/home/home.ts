import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  company: 'any';
  isValid: boolean;
  options = { key: '' };

  constructor(public navCtrl: NavController, public http: Http, public alertCtrl: AlertController) {
  }

  public showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Clé invalide',
      subTitle: 'clé invalide ! merci de conntacter l\'admin ',
      buttons: ['OK']
    });
    alert.present();
  }

  public getCompany() {
    this.http.get('api/v1/mobile/company?key='+this.options.key).map(res => res.json()).subscribe(
      data => {
        this.isValid = true
        this.company =  data.data.companies[0];

     },
     err => {
       this.isValid = false
       this.showAlert()
       console.log( err );
     }
   );

  }



}
