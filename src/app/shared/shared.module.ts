import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';



@NgModule({
  declarations: [],
  imports: [
    HeaderModule,
    CommonModule
  ],
  exports: [
    HeaderModule
  ]
})
export class SharedModule { }