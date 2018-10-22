import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Product } from '../../Product';
import { Http } from '@angular/http';
import { Menu } from '../../Menu';
import { HomePage } from '../home/home';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  pedido: Menu[] = [];
  product: Product;
  totalPrice: number = 0;
  cantity: number = 0;
  id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.pedido = this.navParams.get('data');
    this.id = this.navParams.get('id');
    this.getProduct();
  }


  getProduct()
  {
    this.pedido.forEach(category => {
      category.products.forEach(product => {
        if(product.id == this.id){
          this.product = product;
        }
      })
    })
  }

  calculatePrice()
  {
    this.totalPrice = this.cantity * this.product.price;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  add()
  {
    this.product.cantity = this.cantity;
    this.navCtrl.push(HomePage,{data:this.pedido, id:});
  }

}
