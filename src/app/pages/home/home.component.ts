import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories : any;

  constructor(public productService : ProductService) { }

  ngOnInit() {
    this.productService.getAllCategories()
    .then((result) => {
      this.categories = result;

    })
  }

}
