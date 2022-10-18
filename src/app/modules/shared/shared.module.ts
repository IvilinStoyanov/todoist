import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonInputComponent } from 'src/app/components/common/common-input/common-input.component';
import { FormCastPipe } from 'src/app/pipes/formCast.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    CommonInputComponent,

    FormCastPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,

    CommonInputComponent,
    FormCastPipe
  ],

})
export class SharedModule { }
