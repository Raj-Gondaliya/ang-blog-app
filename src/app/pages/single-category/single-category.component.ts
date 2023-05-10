import { PostsService } from './../../services/posts.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent {

  postsArray: any[] = []
  categoryObj: any;

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(val => {
      this.categoryObj = val;
      this.postsService.loadCategoryPosts(val['id']).subscribe(post => {
        this.postsArray = post;
      });
    })
  }
}
