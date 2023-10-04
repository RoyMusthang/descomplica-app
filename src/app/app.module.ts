import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { FormsModule } from '@angular/forms';
import { ClientListPage } from './pages/client-page.component';
import { BindingComponent } from './pages/binding-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientListPage,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
