import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RemDcListComponent } from './rem-dc-list/rem-dc-list.component';
import { RemDcItemComponent } from './rem-dc-item/rem-dc-item.component';


const appRoutes: Routes = [
  { path: 'board', component: RemDcListComponent },
  { path: '',
    redirectTo: '/board',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RemDcListComponent,
    RemDcItemComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
