import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getCategories() {
    return [{
      name: 'Mobile',
      icon: 'phone-portrait-outline',
      count: 1000
    }, {
      name: 'Electronics',
      icon: 'tv-outline',
      count: 1000
    }, {
      name: 'Vehicles',
      icon: 'car-outline',
      count: 1000
    }, {
      name: 'Property',
      icon: 'home-outline',
      count: 1000
    }, {
      name: 'Essentials',
      icon: 'layers-outline',
      count: 1000
    }, {
      name: 'Business',
      icon: 'bag-handle-outline',
      count: 1000
    }];
  }

}
