import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {VideosService} from './videos.service'

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  videos = []

  constructor(private videosService:VideosService,
     private router:Router,) { }

  ngOnInit() {
    this.videos = this.videosService.getVideos();
   /* this.videosService.getPhotos().then(res=>{
        console.log(res);
      });*/
  }

  ionViewWillEnter(){
    this.videos = this.videosService.getVideos();
  }

  addNewVideo(){
    this.router.navigate(['/new-video']);
  }

}
