import { Component, inject, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-update',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './about-update.component.html',
  styleUrls: ['./about-update.component.scss']
})
export class AboutUpdateComponent implements OnInit {
  public formModel: FormGroup;
  private router = inject(Router);

  constructor(
    private formBuilder: FormBuilder,
    private aboutService: AboutService
  ) {
    this.formModel = this.formBuilder.group({
      location: [''],
      description: [''],
      description2: [''],
      sistem: [''],
      ide: [''],
      hobby: [''],
      music: ['']
    });
  }

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe({
      next: (data) => {
        if (!data.error) {
          this.formModel.patchValue({
            location: data.about.location,
            description: data.about.description,
            description2: data.about.description2,
            sistem: data.about.sistem,
            ide: data.about.ide,
            hobby: data.about.hobby,
            music: data.about.music
          });
        }
      },
      error: (err) => {
        console.log(err.error);
      }
    });
  }

  handleSubmit(): void { 
    this.aboutService.updateAbout(this.formModel.value).subscribe({
      next: (data) => {
        if (!data.error) {
          this.router.navigate(["about"]);
        }
      },
      error: (err) => {
        console.log(err.error);
      }
    })
  }

}
