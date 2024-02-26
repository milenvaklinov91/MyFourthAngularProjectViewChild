<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, ElementRef, ViewChild,} from '@angular/core';
import { DemoComponent } from './demo/demo.component';
>>>>>>> b7030d1c5bc13b2ae30ed10d4a761a68e3836364

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MySixthAngularProjectNgContent';
}
=======
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MyFourthAngularProjectViewChild';

  @ViewChild('dobInput') dateOfBirth!: ElementRef; //<- dateOfBirth property
  //This property has been assigned with the reference to input element
  @ViewChild('ageInput') age!: ElementRef;
  //This property has been assigned with the reference to input element

  @ViewChild (DemoComponent, {static: true}) demoComp!: DemoComponent
  //We have accessed a child component in our parent component class using @ViewChild decorator!

  calculateAge(){
    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    this.age.nativeElement.value = age;
    // console.log(this.dateOfBirth);
    // console.log(this.age);
  }
}
// USING ViewChild WE CAN ACCESS AN HTML ELEMENT OR A CAMPONENT OR A DIRECTIVE
//                  FROM VIEW TEMPLATE IN THE COMPONENT CLASS
>>>>>>> b7030d1c5bc13b2ae30ed10d4a761a68e3836364
