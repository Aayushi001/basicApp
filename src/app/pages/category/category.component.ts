import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category : any;

  constructor(public activatedRoute : ActivatedRoute, public productService : ProductService, public meta: Meta, public title : Title) { 
    
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      let catUrl = {catUrl : params.catUrl};
      this.productService.getCategoryByUrl(catUrl)
      .then((result) => {
        this.category = result;
        this.meta.updateTag({name: 'description', content: this.category.metaDes});
        this.meta.updateTag({name: 'author', content: 'Static Author'});
        this.meta.updateTag({name: 'keywords', content: this.category.metaKeywords});

        this.title.setTitle( this.category.metaTitle );
    const author = this.meta.getTag('name=author');
    console.log(author.content); //talkingdotnet
    const des = this.meta.getTag('name=description');
    console.log(des.content); //talkingdotnet
        console.log(this.category);

      });
    });
  }

}
