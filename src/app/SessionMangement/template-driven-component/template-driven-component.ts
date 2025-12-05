import { Component, OnInit } from '@angular/core';

type Gender = 'Male' | 'Female' | 'Other';

@Component({
  selector: 'app-template-driven-component',
  standalone: false,
  templateUrl: './template-driven-component.html',
  styleUrl: './template-driven-component.css',
})
export class TemplateDrivenComponent implements OnInit {


  model = {
    name: '',
    dateOfBirth: '',
    gender: '' as '' | Gender,
    isActive: false,
    country: '',
    certification: [] as string[],
    photo: null as File | null
  };

  countries = [
    { code: 'IN', name: 'India' },
    { code: 'US', name: 'United States' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'DE', name: 'Germany' },
    { code: 'JP', name: 'Japan' },
  ];

  certifications = [
    'AWS Certified Cloud Practitioner',
    'AWS Solutions Architect',
    'Azure Fundamentals (AZ-900)',
    'Azure Administrator (AZ-104)',
    'Google Cloud Digital Leader',
    'PMP',
    'Scrum Master'
  ];


  // For <input type="date"> to prevent future dates
  maxDateStr = this.toDateInputString(new Date());


  // Errors for file input (since it isn't a standard ngModel validator)
  photoErrors: { fileType?: boolean; fileSize?: { maxSizeMB: number } } = {};

  constructor() {

  }
  ngOnInit(): void {

  }


  private toDateInputString(date: Date) {
    debugger
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }


  onFileSelected(event: Event) {
    debugger
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0] ?? null;
    this.photoErrors = {};

    if (!file) {
      this.model.photo = null;
      return;
    }

    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    const maxSizeMB = 5;

    if (!allowed.includes(file.type)) {
      this.photoErrors.fileType = true;
      this.model.photo = null;
      return;
    }
    if (file.size > maxSizeMB * 1024 * 1024) {
      this.photoErrors.fileSize = { maxSizeMB };
      this.model.photo = null;
      return;
    }

    this.model.photo = file;
  }


  submit(form: any) {
    debugger
    if (!form.valid || this.photoErrors.fileType || this.photoErrors.fileSize || !this.model.photo) {
      // Mark controls as touched to show validation messages
      Object.values(form.controls).forEach((c: any) => c.markAsTouched());
      return;
    }

    // Build FormData for file upload
    const formData = new FormData();
    formData.append('name', this.model.name);
    formData.append('dateOfBirth', this.model.dateOfBirth);
    formData.append('gender', this.model.gender || '');
    formData.append('isActive', String(this.model.isActive));
    formData.append('country', this.model.country);
    if (this.model.photo) formData.append('photo', this.model.photo);
    this.model.certification.forEach((c, i) => formData.append(`certification[${i}]`, c));

    // TODO: post with HttpClient
    // this.http.post('/api/users', formData).subscribe(...);

    console.log('Submitting model:', this.model);
    alert('Form is valid and ready to submit!');
  }


  reset(form: any) {
    form.resetForm({
      name: '',
      dateOfBirth: '',
      gender: '',
      isActive: false,
      country: '',
      certification: []
    });
    this.model.photo = null;
    this.photoErrors = {};
  }


}
