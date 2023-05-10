import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {

  postData: any;
  similarPostArray: any[] = [];

  constructor(private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(val => {
      this.postService.countViews(val['id']);
      this.postService.loadPost(val['id']).subscribe(post => {
        this.postData = post;
        this.loadSimilarPost(this.postData.category.categoryId)
      })
    })
  }

  loadSimilarPost(categoryId: string) {
    this.postService.loadSimilarPost(categoryId).subscribe(val => {
      this.similarPostArray = val;
    })
  }
}
