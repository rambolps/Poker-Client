import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JoinComponent } from './components/join/join.component';
import { WaitComponent } from './components/wait/wait.component';
import { GameComponent } from './components/game/game.component';


const routes: Routes = [
  {
    path: "", component: JoinComponent
  },
  {
    path: "lobby", component: WaitComponent
  },
  {
    path: "play", component: GameComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
