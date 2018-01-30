import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';

import { HighlightModule } from 'ngx-highlightjs';

import { AppComponent } from './app.component';
import { RemDcListComponent } from './rem-dc-list/rem-dc-list.component';
import { RemDcItemComponent } from './rem-dc-item/rem-dc-item.component';

import { DcItemsService } from './services/dc-items.service';


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
    ),
    HighlightModule.forRoot({theme: 'monokai-sublime'})
  ],
  providers: [
    DcItemsService,
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
