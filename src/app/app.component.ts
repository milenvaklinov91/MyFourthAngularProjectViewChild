import { Component, ElementRef, ViewChild,} from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
