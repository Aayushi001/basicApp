import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category : any;

  constructor(public activatedRoute : ActivatedRoute, public productService : ProductService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      let catUrl = {catUrl : params.catUrl};
      this.productService.getCategoryByUrl(catUrl)
      .then((result) => {
        this.category = result;
        console.log(this.category);
      });
    });
  }

}
