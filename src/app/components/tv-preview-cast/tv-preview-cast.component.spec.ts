import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvPreviewCastComponent } from './tv-preview-cast.component';

describe('TvPreviewCastComponent', () => {
  let component: TvPreviewCastComponent;
  let fixture: ComponentFixture<TvPreviewCastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvPreviewCastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvPreviewCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
