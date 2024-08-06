import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],  // Cambia a ReactiveFormsModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private AuthService = inject(AuthService);
  private router = inject(Router);
  public formBuild = inject(FormBuilder);

  public formModel = this.formBuild.group({
    email: '',
    password: ''
  });
  errors = "";

  onSubmit(): void {
    if (this.formModel.invalid) {
      return;
    }
    const email = this.formModel.value.email ?? ""
    const password = this.formModel.value.password ?? ""

    this.AuthService.signIn(email, password).subscribe({
      next: (data) => {
        if (data) {
          localStorage.setItem("token", data.token);
          this.router.navigate(["about"]);
        }
      },
      error: (err) => {
        console.log(err.error);
        this.errors = err.error.message;
      }
    });
  }
}
