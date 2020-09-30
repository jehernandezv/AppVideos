import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosPage } from './videos.page';

const routes: Routes = [
  {
    path: '',
    component: VideosPage
  },
  {
    path: 'video-detail',
    loadChildren: () => import('./video-detail/video-detail.module').then( m => m.VideoDetailPageModule)
  },
  {
    path: 'video-add',
    loadChildren: () => import('./video-add/video-add.module').then( m => m.VideoAddPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideosPageRoutingModule {}
