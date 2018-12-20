import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadSeriesComponent } from './download-series.component';

describe('DownloadSeriesComponent', () => {
  let component: DownloadSeriesComponent;
  let fixture: ComponentFixture<DownloadSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
