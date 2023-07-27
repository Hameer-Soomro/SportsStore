import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SportsStore';
  public currentRoute:string = "";

  constructor(private router: Router){
    router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

}
