import { Component, Input} from '@angular/core';

export interface ItemCard {
  icon: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'ibis-dev-item-header',
  templateUrl: './item-header.component.html',
  styleUrls: ['./item-header.component.scss']
})
export class ItemHeaderComponent {
  @Input() item: ItemCard;
}
