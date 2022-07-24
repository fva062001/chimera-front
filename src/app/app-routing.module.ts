import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './lobby/lobby.component';

const routes: Routes = [
  { path: '', redirectTo:'/lobby', pathMatch: 'full' },
  {path: 'lobby', component: LobbyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
