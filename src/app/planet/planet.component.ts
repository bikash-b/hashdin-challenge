import { Component, OnInit, Input } from '@angular/core';

type Size = {
  width: number,
  height: number
}

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  @Input() planet: any = {population: 30000000};
  @Input() maxPopulation: number = 1000000000000;

  constructor() { }

  ngOnInit(): void {
  }


  get getPlanetSize(): any{
    const size = {} as Size;
    if(!this.planet.population){
      size.height = 50;
      size.width = 50;
    }else{
      const calcSize = ( 200 / this.maxPopulation ) * this.planet.population;
      if(calcSize <= 200){
        size.height = calcSize;
        size.width = calcSize;
      }else{
        size.height = 200;
        size.width = 200;
      }
    }
    return size;
  }  
}

// 1000000000000 => 200
// 1 => 200 / 1000000000000 
