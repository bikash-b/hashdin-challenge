import { Component, OnInit } from '@angular/core';
import { PlanetHttpService } from './planet-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public planets: any[];
  public maximumPopulation: number;

  constructor(
    private _planetHttpService: PlanetHttpService
  ){}

  ngOnInit(): void{
    this._planetHttpService
      .getPlanets()
      .subscribe(
        (planets) => {
          this.planets = planets;

        }
      );
  }
}


// let noOfPossibleChocklates = 0;
// function getNumOfChocklates(amount){
//     noOfPossibleChocklates++;
//     if(amount / 3){

//     }
//     amount--;
//     if(!amount){
//         getNumOfChocklates(amount);
//     }else{
//         return;
//     }    
// }