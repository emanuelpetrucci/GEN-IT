import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '', loadChildren: () =>
          import('@front/ibis-dev/feature-page-home').then(e => e.IbisDevFeaturePageHomeModule)
      },
      {path: '', pathMatch: 'full', redirectTo: ''},
    ],
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class IbisDevFeatureShellModule {}
