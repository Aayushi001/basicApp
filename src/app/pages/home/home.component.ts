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
  homeDes = 'Home Description';

  constructor(public productService : ProductService, public meta : Meta, public title : Title ) { }

  ngOnInit() {
    this.productService.getAllCategories()
    .then((result) => {
      this.categories = result;
      this.meta.addTags([
        {name: 'description', content: this.homeDes},
        {name: 'author', content: 'Static Author'},
        {name: 'keywords', content: 'Home Keywords'}
      ]);
      this.title.setTitle( 'Home' );
      const author = this.meta.getTag('name=author');
    console.log(author.content); //talkingdotnet
    const des = this.meta.getTag('name=description');
    console.log(des.content); //talkingdotnet

    })
  }

}
