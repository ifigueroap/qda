import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.page.html',
  styleUrls: ['./add-document.page.scss'],
})
export class AddDocumentPage implements OnInit {

  fileName: string;
  fileContents: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  submitForm() {
    console.log("SUBMITTING FORM");
    this.modalController.dismiss({
      'cancelled': false,
      'newFilename': this.fileName,
      'newFileContents': this.fileContents
    });
  }

  dismiss() {
    console.log("DISMISSING FORM");
    this.modalController.dismiss({
      'cancelled': true
    })
  }

  loadFileFromDevice(evt) {
    const file = evt.target.files[0];    
    const reader = new FileReader();    
    reader.onload = (event) => {     
        this.fileName = file.name;   
        this.fileContents = event.target.result as string;       
    }

    reader.onerror = (error) => {
      console.log("Error reading file");
      console.error(error);
    }

    reader.readAsText(file);
  }
}
