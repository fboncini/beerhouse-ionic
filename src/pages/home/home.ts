import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PedidoPage } from '../pedido/pedido';
import { Menu } from '../../Menu';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  menu: Menu[];

  constructor(public navCtrl: NavController, public http: Http) {
    this.getJSon();
  }

  getJSon() {
    return this.http.get('assets/productos.json').map(res => res.json()).subscribe(data => {
      this.menu = data;
      err => {
        console.log(err);
      }
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
    this.navCtrl.push(PedidoPage, {data:this.menu})
  }

  findId(id : number)
  {
    this.menu.forEach(
      element => element.products.forEach(product => {
        if(product.id == id)
        {
          product.cantity ++;
        }
      }))
  }
}

