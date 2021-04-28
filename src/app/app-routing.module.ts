import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersModule } from '@sainture/users';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('@sainture/users').then((m) => m.UsersModule),
  },
  {
    path: 'jobs',
    loadChildren: () => import('@sainture/jobs').then((m) => m.JobsModule),
  },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
