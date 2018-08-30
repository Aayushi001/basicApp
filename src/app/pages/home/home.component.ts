import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories : any;

  constructor(public productService : ProductService, public meta : Meta, public title : Title ) { }

  ngOnInit() {
    this.productService.getAllCategories()
    .then((result) => {
      this.categories = result;
      this.meta.addTags([
        {name: 'description', content: 'Home Description'},
        {name: 'author', content: 'Static Author'},
        {name: 'keywords', content: 'Home Keywords'}
      ]);
      this.title.setTitle( 'Home' );

    })
  }

}
