import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports: [
    CommonModule,
    NgbModule
  ],
  declarations: []
})
export class SharedModule { }
