import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'MySixthAngularProjectNgContent'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MySixthAngularProjectNgContent');
=======
  it(`should have as title 'MyFourthAngularProjectViewChild'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MyFourthAngularProjectViewChild');
>>>>>>> b7030d1c5bc13b2ae30ed10d4a761a68e3836364
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, MySixthAngularProjectNgContent');
=======
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, MyFourthAngularProjectViewChild');
>>>>>>> b7030d1c5bc13b2ae30ed10d4a761a68e3836364
  });
});
