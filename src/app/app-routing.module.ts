import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homedir } from 'node:os';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  
  { path: "home",component:HomeComponent},
  { path: "services", component:ServicesComponent},
  {path: "about", component:AboutComponent},
  {path: "pricing",component:ServicesComponent},
  { path: "",component:HomeComponent},
  {path: "contact",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
