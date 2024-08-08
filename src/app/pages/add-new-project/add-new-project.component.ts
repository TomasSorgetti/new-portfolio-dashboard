import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-add-new-project',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-new-project.component.html',
  styleUrl: './add-new-project.component.scss'
})
export class AddNewProjectComponent {
  public formModel: FormGroup;
  public imageFile: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private ProjectService: ProjectService
  ) {
    this.formModel = this.formBuilder.group({
      title: [''],
      description: [''],
      url: ['']
    });
  }

  onImageChange(event: any): void {
      this.imageFile = event.target.files[0];
  }

  handleSubmit(): void { 
    const formData = new FormData();
    formData.append('title', this.formModel.get('title')?.value);
    formData.append('description', this.formModel.get('description')?.value);
    formData.append('url', this.formModel.get('url')?.value);
    if (this.imageFile) {
      formData.append('image', this.imageFile);      
    }


    this.ProjectService.createProject(formData).subscribe({
      next: (response) => {
        if (!response.error) {
          console.log(response);
          
          this.formModel.reset();
        }
      },
      error: (err) => {
        console.log(err.error);
      }
    })
  }
}
