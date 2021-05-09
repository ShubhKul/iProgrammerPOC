import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { MatButtonModule, MatCardModule } from '@angular/material';

const routes: Routes = [ 
  { 
    path:'', 
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NgxUiLoaderModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule
  ]
})
export class HomeModule { }
