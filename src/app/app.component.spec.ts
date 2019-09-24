import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, NavMenuComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));
});
