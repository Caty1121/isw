import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './locations/locations.component';
import { ActivitiesComponent } from './activities/activities.component';
import { GuidanceComponent } from './guidance/guidance.component';


const routes: Routes = [
  { path: 'locations', component: LocationsComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'guidance', component: GuidanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
