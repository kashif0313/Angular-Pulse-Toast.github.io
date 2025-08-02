import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { ToastTemplate1Component } from './toast-template-1/toast-template-1.component';
import { ToastTemplate2Component } from './toast-template-2/toast-template-2.component';
import { ToastTemplate3Component } from './toast-template-3/toast-template-3.component';

@NgModule({
  declarations: [
    ToastComponent,
    ToastTemplate1Component,
    ToastTemplate2Component,
    ToastTemplate3Component,
  ],
  imports: [CommonModule],
  exports: [ToastComponent],
})
export class NgxPulseToastModule {}
