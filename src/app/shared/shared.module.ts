import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { LittleBlockComponent } from './little-block/little-block.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    LittleBlockComponent
  ],
  imports: [
    HeaderModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderModule,
    LittleBlockComponent
  ]
})
export class SharedModule { }
