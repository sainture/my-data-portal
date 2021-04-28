import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, MatListModule, RouterModule],
  exports: [NavComponent],
})
export class CoreModule {}
