import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PedidoPage } from '../pedido/pedido';
import { Product } from '../../Product';
import { Menu } from '../../Menu';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  products: Menu[];

  constructor(public navCtrl: NavController, public http: Http) {
    this.getJSon();
  }

  getJSon() {
    return this.http.get('assets/productos.json').map(res => res.json()).subscribe(data => {
      this.products = data;
      err => {
        console.log(err);
      }
    });
  }

  add(id : number) {
    this.products.forEach(
      element => element.products.forEach(product => {
        if(product.id == id)
        {
          product.cantity ++;
        }
      }))
  }

  remove(id : number)
  {
    this.products.forEach(
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
    this.navCtrl.push(PedidoPage, {data:this.products})
  }

  findId(id : number)
  {
    this.products.forEach(
      element => element.products.forEach(product => {
        if(product.id == id)
        {
          product.cantity ++;
        }
      }))
  }
}

