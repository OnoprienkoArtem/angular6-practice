import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeModuleComponent } from './time-module/time-module.component';
import { CountdownModuleComponent } from './countdown-module/countdown-module.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "time" },
  { path: "time", component: TimeModuleComponent },
  { path: "countdown", component: CountdownModuleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
