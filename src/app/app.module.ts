import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonModule, MatCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import {routes} from './app.routing';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardCreatorComponent } from './components/card-creator/card-creator.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardCreatorComponent,
    ScannerComponent,
    GeneratorComponent,
    NavbarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes
    ),
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
