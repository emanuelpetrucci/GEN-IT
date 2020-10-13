import { Component, OnDestroy } from '@angular/core';
import { HomeService, TableService } from '@front/ibis-dev/services';
import { Subscription } from 'rxjs';
import { ItemCard } from '../item-header/item-header.component';
import { MatSnackBar } from '@angular/material/snack-bar';

const DATA_HEADER: ItemCard[] = [
  {icon: 'touch_app',title:'elegi un auto',subtitle:'Acorde a tus intereses.'},
  {icon: 'contact_mail',title:'retira el auto',subtitle:'Combina un lugar de encuentro con el propietario.'},
  {icon: 'directions_car',title:'viaja seguro',subtitle:'Cocoche cuenta con un seguro todo riesgo y retiene un deposito en la tarjeta como garantía.'},
  {icon: 'credit_card',title:'realiza el pago',subtitle:'Abonás el costo del alquiler.'},
]

@Component({
  selector: 'ibis-dev-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends TableService implements  OnDestroy {
  observer: Subscription;

  constructor(private _homeService: HomeService,private _snackBar: MatSnackBar) {
    super();
    this.getList();
  }

  get dataHeader() {
    return DATA_HEADER;
  }

  getList() {
    const fn = this._homeService.getList;
    this.observer = this.getService(fn.bind(this._homeService)).subscribe(() => {
    }, (error: any) => {
      // TODO this alert should be generic
      this._snackBar.open('Error! No se pudo obtener el listado','', {
        duration: 2000,
      });
    })
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.unsubscribe()
  }
}
