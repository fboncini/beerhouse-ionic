import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Menu } from '../../Menu';
import { HomePage } from '../home/home';

/**
 * Generated class for the PedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {

  menu: Menu[];
  pedido: Menu[] = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.menu = this.navParams.get('data');
    this.filterCategory();
  }

  ionViewDidLoad() {
  }

  isThereAnyInCategory (category : Menu) :boolean{
    let result = false;
    category.products.forEach(product => {
      product.cantity != 0 ? result = true : true; 
    });
    return result; 
  }

  filterCategory () {
    this.menu.forEach(category => {
      this.isThereAnyInCategory(category) ? this.pedido.push(category) : true;
    });
  }

  add(id : number) {
    this.menu.forEach(
      element => element.products.forEach(product => {
        if(product.id == id)
        {
          product.cantity ++;
        }
      }))
  }

  remove(id : number)
  {
    this.menu.forEach(
      element => element.products.forEach(product => {
        if(product.id == id)
        {
          if(product.cantity > 0)
          {
            product.cantity --;
          }
        }
      }))
  }

  goTo() 
  {
    this.navCtrl.push(HomePage)
  }

}
