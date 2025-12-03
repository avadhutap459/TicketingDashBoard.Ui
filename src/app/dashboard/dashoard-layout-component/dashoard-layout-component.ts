import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashoard-layout-component',
  standalone: false,
  templateUrl: './dashoard-layout-component.html',
  styleUrls: ['./dashoard-layout-component.css'],
})
export class DashoardLayoutComponent implements OnInit {
  sidebarOpen = true;

  constructor(private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.activateRoute.data.subscribe(data => {
      let dashboard = data["dashboardData"]
    })
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
