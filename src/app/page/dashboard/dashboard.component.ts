import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { 
    
  }



  ngOnInit(): void {


  }

  onRouting(){
    this.router.navigate(['/gallery']);
    localStorage.setItem('hideMenu', 'false');
  }

  

}


