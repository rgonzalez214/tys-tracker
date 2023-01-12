import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body-section/body.component';
import { FooterComponent } from './footer-section/footer.component';
import { ToolbarComponent } from './tool-bar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
