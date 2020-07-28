import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { ManifestComponent } from './components/manifest/manifest.component';
import { CoverPageComponent } from './components/cover-page/cover-page.component';
import { GuestComponent } from './components/guest/guest.component';
import { ItemsComponent } from './components/items/items.component';
import { CheckInOutComponent } from './components/check-in-out/check-in-out.component';

@NgModule({
  declarations: [
    AppComponent,
    ManifestComponent,
    CoverPageComponent,
    GuestComponent,
    ItemsComponent,
    CheckInOutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [CheckInOutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
