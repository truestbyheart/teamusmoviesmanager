import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvDetaildeViewComponent } from './tv-detailde-view.component';

describe('TvDetaildeViewComponent', () => {
  let component: TvDetaildeViewComponent;
  let fixture: ComponentFixture<TvDetaildeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvDetaildeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvDetaildeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
