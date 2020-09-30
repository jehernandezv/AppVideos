import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoAddPageRoutingModule } from './video-add-routing.module';

import { VideoAddPage } from './video-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoAddPageRoutingModule
  ],
  declarations: [VideoAddPage]
})
export class VideoAddPageModule {}
