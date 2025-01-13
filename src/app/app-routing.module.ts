import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  {path:"",component:ListComponent},
  {path:"list", component:ListComponent},
  {path:"autocomplete", component:AutocompleteComponent},
  {path:"input", component:InputComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
