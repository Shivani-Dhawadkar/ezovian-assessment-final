import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';









const materialArr=[
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule,
  MatRadioModule,
  MatSnackBarModule
]
@NgModule({
  providers: [
    // {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'f'}}
  ],
  declarations: [],
  imports: [
    CommonModule,
    ...materialArr
  ],
  exports:[
    ...materialArr
  ]
})
export class MaterialModule { }
