import { Injectable } from '@angular/core';
import {Video} from './video.model'
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private videos: Video[] = [
    {
      id:'1',
      email:'jhonn1@uptc.edu.co',
      urlMiniImg:'https://cdn.icon-icons.com/icons2/1713/PNG/512/iconfinder-videologoplayicon-3993847_112649.png',
      miniatures:["https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1",
                  "https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1",
                 "https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1"]
    },
    {
      id:'2',
      email:'jhonn2@uptc.edu.co',
      urlMiniImg:'https://cdn.icon-icons.com/icons2/1713/PNG/512/iconfinder-videologoplayicon-3993847_112649.png',
      miniatures:[]
    },
    {
      id:'3',
      email:'jhonn3@uptc.edu.co',
      urlMiniImg:'https://cdn.icon-icons.com/icons2/1713/PNG/512/iconfinder-videologoplayicon-3993847_112649.png',
      miniatures:["https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1",
      "https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1",
     "https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1"]
    }
  ]

  constructor(private httpClient:HttpClient) { }

  /*getVideos(){
    return [...this.videos]
  }*/

  getVideosById(videoId:string){
    return {
      ...this.videos.find(video => {
        return video.id === videoId
      })
    }
  }

  addVideos(email:string){
    this.videos.push({
      email,
      urlMiniImg: "https://cdn.icon-icons.com/icons2/1713/PNG/512/iconfinder-videologoplayicon-3993847_112649.png",
      miniatures:[],
      id: this.videos.length + 1 + ""
    })
  }

  deleteVideo(id:string){
   this.videos = this.videos.filter(video => {
      return video.id === id
    })
  }

  getPhotos(){
    return this.httpClient.get('http://localhost:3000/saludo').toPromise();
  }

  getVideos(){
    var response = this.httpClient.get('http://localhost:3000/getVideos').toPromise();
    response.then(res => {
      // console.log(Object.values(res)[0]);
      // this.videos = Object.values(res)[1];
      //this.videos = JSON.parse(res.);
      //console.log(listVideos[0]);
    });
  
    return [...this.videos]
  }




  async postVideo(email:string, video: File){
    const formData = new FormData();
    console.log(video);
    formData.append('email',email);
    formData.append('video',video);

    const response = await fetch('http://localhost:3000/addVideo',{
      method:'POST',
      body:formData,
      headers:{ 'enctype': 'multipart/form-data' }
    });
  return response.json();
  }

}
