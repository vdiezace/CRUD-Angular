import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'home/new', component: NewUserComponent},
  { path: 'home/update/:userId', component: UpdateUserComponent},
  { path: 'home/view/:userId', component: ViewUserComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
