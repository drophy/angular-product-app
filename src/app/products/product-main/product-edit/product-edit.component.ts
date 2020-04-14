import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductsService } from '../../products.service';
import { Product, Especificacion } from '../../Product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  editMode: boolean;
  product: Product;

  // id: number;
  // name: string;
  // brand: string;
  // price: number;
  // description: string;
  // stock: number;
  // img: string;

  constructor(private productService: ProductsService, private location:Location) { }

  ngOnInit(): void {
    let path = this.location.path();
    this.editMode = path.indexOf('edit') !== -1;

    if(this.editMode) {
      this.product = this.productService.getProduct(Number( path.split('/')[2] )); // got the param this way >w<
      // this.name = this.product.nombre;
      // this.brand = this.product.marca;
      // this.price = this.product.precio;
      // this.description = this.product.descripcion;
      // this.stock = this.product.existencia;
      // this.img = this.product.img;
    }
    //else this.product = new Product()
  }

  addSpecHandler() {
    // https://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
    let attribute = (<HTMLInputElement>document.querySelector('#spec-v1')).value;
    let value = (<HTMLInputElement>document.querySelector('#spec-v2')).value;
    let unit = (<HTMLInputElement>document.querySelector('#spec-v3')).value;
    this.product.especificacion.push(new Especificacion(attribute, value, unit));
  }

  removeSpecHandler(index) {
    this.product.especificacion.splice(index, 1);
  }

  save() {
    this.productService.editProduct(this.product);
  }

}
