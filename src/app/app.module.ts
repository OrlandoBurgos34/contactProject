import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NabvarComponent } from './layout/navbar/nabvar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { ReciveFormComponent } from './component/recive-form/recive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NabvarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ReciveFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
