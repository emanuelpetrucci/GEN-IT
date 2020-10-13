import { Component, Input } from '@angular/core';

interface CarData {
  doors: number;
  modelDescription: string;
  cost: number;
  fuelType: string;
  placeDescription: string;
}

@Component({
  selector: 'ibis-dev-card-car',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent {
  @Input() car: CarData;
}
