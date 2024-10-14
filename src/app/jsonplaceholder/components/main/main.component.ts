import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../services/posts.service';
import { IPosts } from '../../models/iposts';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  posts : IPosts[] = []

  constructor(readonly postsService : PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((value : IPosts[]) => {
      this.posts = value
    })
  }
}
