import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ProductsService } from '../../products.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit 
{
  monitoringView: boolean;
  
  arrProducts: Product[]; // all products
  private productSubscription: Subscription;

  query: string = '';
  arrResults: Product[]; // products to show

  selectedSet: Set<number>;

  constructor(private productsService: ProductsService, private location: Location) { }

  ngOnInit(): void 
  {
    this.monitoringView = this.location.path() === '/monitoring';
    this.updateProductList();
    this.selectedSet = new Set();

    this.productSubscription = this.productsService.productsSubject.subscribe(() => this.updateProductList());
  }

  updateProductList() 
  {
    this.arrProducts = this.productsService.getProducts(); // get all products
    if(this.monitoringView) // if we're in '/monitoring' just keep monitored products
    {
      let monitoredSet = this.productsService.getMonitoredProdcuts();
      this.arrProducts = this.arrProducts.filter(p => monitoredSet.has(p.uid));
    } 
    this.arrResults = this.arrProducts; // since at first, we'll show all products
  }

  search() 
  { 
    if(this.query === undefined || this.query === '') this.arrResults = new Array(...this.arrProducts); // reset list
    else {
      let query = this.query.toUpperCase();
      this.arrResults = this.arrProducts.filter(product => {
        return product.nombre.toUpperCase().indexOf(query) != -1 || product.descripcion.toUpperCase().indexOf(query) != -1;
      });
    }
  }

  deleteHandler(id: number) {
    if(!this.monitoringView) this.productsService.deleteProduct(id);
    else this.productsService.removeFromMonitored(id);
    
    // this.updateProductList(); // shouldn't be needed now that we have the observable
  }

  selectedHandler(objData) {
    if(objData.checked) this.selectedSet.add(objData.id);
    else this.selectedSet.delete(objData.id);
  }

  addSelected()
  {
    this.productsService.addToMonitored(this.selectedSet);
  }

}
