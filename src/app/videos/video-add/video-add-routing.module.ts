import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoAddPage } from './video-add.page';

const routes: Routes = [
  {
    path: '',
    component: VideoAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoAddPageRoutingModule {}
