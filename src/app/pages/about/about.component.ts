import { Component, inject } from '@angular/core';
import { AboutService } from '../../services/about.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  location:string = "";
  description:string = "";
  description2:string = "";
  sistem:string = "";
  ide:string = "";
  hobby:string = "";
  music: string = "";
  
  public AboutService = inject(AboutService)
  private router = inject(Router);

  constructor() {
    this.AboutService.getAbout().subscribe({
      next: (data) => {
        if (!data.error) {
        this.location = data.about.location;
        this.description = data.about.description;
        this.description2 = data.about.description2;
        this.sistem = data.about.sistem;
        this.ide = data.about.ide;
        this.hobby = data.about.hobby;
        this.music = data.about.music;
        }
      },
      error: (err) => {
        console.log(err.error);
      }
    })
  }
}

