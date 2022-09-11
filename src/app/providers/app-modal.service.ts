import { Component, Injectable } from '@angular/core';
import { ModalController, ModalOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AppModalService {

  constructor(
    private modalCtrl: ModalController
  ) { }

  async show(options: ModalOptions, data = {}) {
    let o: ModalOptions = { ...options, componentProps: data };
    const a = await this.modalCtrl.create(o);
    return await a.present();
  }
}
