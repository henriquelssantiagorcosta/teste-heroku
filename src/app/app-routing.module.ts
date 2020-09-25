import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TesteDeRotaComponent} from "./teste-de-rota/teste-de-rota.component";


const routes: Routes = [
  {path: 'teste-de-rota', component: TesteDeRotaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
