import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCameraComponent } from './live-camera.component';

describe('LiveCameraComponent', () => {
  let component: LiveCameraComponent;
  let fixture: ComponentFixture<LiveCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveCameraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
