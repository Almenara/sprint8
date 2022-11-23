import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule ],
      declarations: [ RegisterComponent ],
      providers:[
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Crear usurio y redigir a la home', () =>{
    //component.user.active = true;
    //component.user.email = "email@email.com";
    //component.user.name = "nombre";
    //component.user.surname = "apellido";
    //component.user.password = "password";
    //component.register();
    expect (routerSpy.navigate).toHaveBeenCalledWith(['/home']);
  })
});
