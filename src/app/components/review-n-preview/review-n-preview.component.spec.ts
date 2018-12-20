import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewNPreviewComponent } from './review-n-preview.component';

describe('ReviewNPreviewComponent', () => {
  let component: ReviewNPreviewComponent;
  let fixture: ComponentFixture<ReviewNPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewNPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewNPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
