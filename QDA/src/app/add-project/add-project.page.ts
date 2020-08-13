import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.page.html',
  styleUrls: ['./add-project.page.scss'],
})
export class AddProjectPage implements OnInit {

  projectName: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  submitForm() {
    console.log("SUBMITTING FORM");
    this.modalController.dismiss({
      'cancelled': false,
      'newProjectName': this.projectName
    });
  }

  dismiss() {
    console.log("DISMISSING FORM");
    this.modalController.dismiss({
      'cancelled': true
    })
  }

  // https://github.com/morungos/node-word-extractor
}
