/** Libraries */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

/** Components */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ViewUserComponent,
    UpdateUserComponent,
    NewUserComponent,
    FooterComponent,
    SpinnerComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
