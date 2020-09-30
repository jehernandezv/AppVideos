import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoAddPage } from './video-add.page';

describe('VideoAddPage', () => {
  let component: VideoAddPage;
  let fixture: ComponentFixture<VideoAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
