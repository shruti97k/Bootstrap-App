import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';

const routes: Routes = [
  // {path:"",component:ListComponent},
  // {path:"list", component:ListComponent},
  {path:"", component:HomeComponent},
  {path:"input", component:InputComponent},
  {path:"autocomplete", component:AutocompleteComponent},
  {path:"card", component:CardComponent},
  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
