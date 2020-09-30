import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Video } from '../video.model';
import { VideosService } from '../videos.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.page.html',
  styleUrls: ['./video-detail.page.scss'],
})
export class VideoDetailPage implements OnInit {

  video: Video;

  constructor(private activatedRoute:ActivatedRoute, private videoService: VideosService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      //rdirec
      const videoId = paramMap.get('videoId')
      this.video = this.videoService.getVideosById(videoId);
      console.log(this.video);
  })
  }

}
