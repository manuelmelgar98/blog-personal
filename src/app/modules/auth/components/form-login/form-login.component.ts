import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from '../../models/login.model';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {
  @Output() save = new EventEmitter<Login>();

  public formLogin = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    pass: new FormControl<string>('', [Validators.required, Validators.minLength(6)])
  })

  onSubmit(): void {
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
      return;
    }
    this.save.emit(this.formLogin.value as Login);
  }

}
