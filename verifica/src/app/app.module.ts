import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { ClasseComponent } from './classe/classe.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    ClasseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
