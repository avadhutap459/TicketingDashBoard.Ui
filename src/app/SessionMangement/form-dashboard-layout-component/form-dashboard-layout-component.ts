import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-form-dashboard-layout-component',
  standalone: true,
   imports: [CommonModule, RouterOutlet],
  templateUrl: './form-dashboard-layout-component.html',
  styleUrl: './form-dashboard-layout-component.css',
})
export class FormDashboardLayoutComponent {

}
