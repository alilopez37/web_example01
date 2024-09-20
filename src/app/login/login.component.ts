import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  miForm : FormGroup;
  isError: boolean = false;

  constructor() {
    this.miForm = new FormGroup({
      username : new FormControl('',[Validators.minLength(8), Validators.maxLength(15)]),
      password : new FormControl('', Validators.required)
    });
  }

  submit() {

    if (this.miForm.invalid || this.miForm.untouched)
      alert("Error en el formulario")
    else 
      console.log(this.miForm.value);
    
  }

}
