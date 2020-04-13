import { Injectable } from '@angular/core';
import { Product, Especificacion } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  arrProducts : Product[];
  monitoredProductIdSet : Set<number>;

  constructor() { 
    this.arrProducts = [
      new Product(0, 'Sword Art Online Progressive 5 (Light Novel)', 'Yen', 'After successfully untangling themselves from a dangerous encounter with the Black Poncho Man and clearing the fifth floor of Aincrad, Kirito and Asuna head to the next challenge, an area filled with...puzzles?', 208, 4, [
        new Especificacion('Pasta blanda', 192, 'páginas'),
        new Especificacion('Dimensiones del producto', '14 x 1.8 x 20.6', 'cm'),
        new Especificacion('Peso del envío', 200, 'g')
      ], 'https://images-na.ssl-images-amazon.com/images/I/51ho46bjATL._SX331_BO1,204,203,200_.jpg'),
      new Product(1, 'Sword Art Online Progressive 6 (Light Novel)', 'Yen', `"...CAST ASIDE YOUR DISTRACTIONS AND MAINTAIN THE TRANQUILITY OF YOUR HEART."At long last, Kirito and Asuna have reunited with Kizmel the dark elf, and everything is as it should be...Well, almost everything. As the three continue the Elf War campaign and hunt for the remaining sacred keys, they're met with one surprise after another. Between the assassination attempts, off-script scenarios, and AI that seem a little too lifelike, Kirito can't help but wonder if this is the same game he beta tested! And if that wasn't enough, a shocking development allows the Curse of Stachion questline to finally come to an end-but not before the party receives another unwelcome visit from a PK agitator! Sword Art Online: Progressive, a new version of the Sword Art Online tale that chronicles the entirety of Kirito and Asuna's epic adventure through Aincrad, continues!`, 345, 5, [
        new Especificacion('Pasta blanda', 288, 'páginas'),
        new Especificacion('Dimensiones del producto', '14.1 x 2.5 x 21', 'cm'),
        new Especificacion('Peso del envío', 299, 'g')
      ], 'https://images-na.ssl-images-amazon.com/images/I/51pCIgmizDL._SX331_BO1,204,203,200_.jpg'),
      new Product(3, 'Rocketbook Everlast Minicuaderno inteligente reutilizable, Azul Midnight', 'Rocketbook', 'No más papel de desperdicio: este portátil ecológico se puede usar sin cesar. Es como tener 1, 000 cuadernos en tu bolsillo.', 319, 3, [
        new Especificacion('Peso del envío',	90.7, 'g')
      ], 'https://images-na.ssl-images-amazon.com/images/I/71-VeVK00RL._AC_SX522_.jpg'),
      new Product(4, 'Asmodee Juego de Mesa Splendor', 'Asmodee', '10 años y más', 817, 2, [
        new Especificacion('Tiempo de juego', 30, 'minutos'),
        new Especificacion('Peso del envío',	839, 'g')
      ], 'https://images-na.ssl-images-amazon.com/images/I/81WnYqKkc7L._AC_SY679_.jpg')
    ];

    this.monitoredProductIdSet = new Set();
  }

  getProducts() {
    return JSON.parse(JSON.stringify(this.arrProducts));
  }

  getMonitoredProdcuts() {
    return new Set([...this.monitoredProductIdSet]);
  }

  addToMonitored(idSet: Set<number>) {
    for(let id of idSet) this.monitoredProductIdSet.add(id);
  }
}
