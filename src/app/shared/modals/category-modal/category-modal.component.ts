import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.scss']
})
export class CategoryModalComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
