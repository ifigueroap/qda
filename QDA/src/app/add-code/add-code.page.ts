import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-code',
  templateUrl: './add-code.page.html',
  styleUrls: ['./add-code.page.scss'],
})
export class AddCodePage implements OnInit {

  codeName: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  submitForm() {
    console.log("SUBMITTING FORM");
    this.modalController.dismiss({
      'cancelled': false,
      'newCodeName': this.codeName
    });
  }

  dismiss() {
    console.log("DISMISSING FORM");
    this.modalController.dismiss({
      'cancelled': true
    })
  }

}
