import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './shared/components/table/table.component';
import { MaterialModule } from './shared/services/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DecimalFormatDirective } from './shared/directive/decimal-format.directive';
import { PercentFormatDirective } from './shared/directive/percent-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    // ContentEditableDirective,
    // OnlyNumbersDirective,
    // NumbersWithDecimalDirective,
    DecimalFormatDirective,
    PercentFormatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
