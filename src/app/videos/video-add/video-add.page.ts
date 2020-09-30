import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideosService } from '../videos.service';

@Component({
  selector: 'app-video-add',
  templateUrl: './video-add.page.html',
  styleUrls: ['./video-add.page.scss'],
})
export class VideoAddPage implements OnInit {

  constructor(private videoService:VideosService, private router:Router) { }

  ngOnInit() {
  }

  saveNewVideo(email, video){
    const file = video.files[0];
    this.videoService.addVideos(email.value);

    //Enviar post al middleware
    this.videoService.postVideo(email.value,file).then(res=>{
      console.log(JSON.stringify(res));
    });

    //redirecciona a la lista de videos
    this.router.navigate(['/videos']);
  }
}
