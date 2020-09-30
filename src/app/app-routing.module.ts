import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'videos',
    pathMatch: 'full'
  },
  {
    path: 'videos',
    children: [
      {
        path:"",
        loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
      },
      {
        path:":videoId",
        loadChildren: () => import('./videos/video-detail/video-detail.module').then(m =>m.VideoDetailPageModule)
      }
    ]
  },
  {
    path:"new-video",
    loadChildren: () => import('./videos/video-add/video-add.module').then(m => m.VideoAddPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
