import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { NgxPulseToastModule, ToastService } from 'ngx-pulse-toast';
import { NgxPulseToastModule } from '../../../ngx-pulse-toast/src/public-api';
import { ToastService } from '../../../ngx-pulse-toast/src/lib/toast.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPulseToastModule],
  templateUrl: './demo.component.html',
})
export class DemoComponent {
  constructor(private toast: ToastService, private sanitizer: DomSanitizer) {}

  message = 'New Update Available!';
  toastTitle = 'Notification';
  type: 'success' | 'info' | 'warning' | 'error' = 'info';
  design: 'basic' | 'modern' | 'elegent' = 'modern';
  position = 'top-center';
  duration = 3000;
  withActions: boolean = false;
  showIcon = true;
  showProgressBar = true;
  stack = true;
  tab: 'content' | 'style' | 'behavior' = 'content';

  // UI helpers (needed for template bindings)
  acceptBtnLabel = 'Yes';
  cancelBtnLabel = 'No';
  progress = 70; // demo progress %
  showButtons = true;
  checked: boolean = false;
  actionToggle() {
    this.withActions = !this.withActions;
  }
  resetConfig() {
    this.message = '';
    this.type = 'success';
    this.duration = 3000;
    this.acceptBtnLabel = 'Accept';
    this.cancelBtnLabel = 'Cancel';
    this.withActions = false;
    this.showIcon = true;
    this.showProgressBar = true;
    this.design = 'basic';
    this.position = 'top-right';
    this.tab = 'content';
  }

  iconToggle() {
    this.showIcon = !this.showIcon;
  }
  progressbarToggle() {
    this.showProgressBar = !this.showProgressBar;
  }

  showToast() {
    this.toast
      .show(this.message, this.type, {
        duration: this.duration,
        withActions: this.withActions,
        acceptButtonLabel: this.acceptBtnLabel,
        cancelButtonLabel: this.cancelBtnLabel,
      })
      .subscribe((res) => console.log('action:', res));
  }

  quick(t: 'success' | 'info' | 'warning' | 'error') {
    this.toast.show(`${t} toast`, t, { duration: 2500 });
  }
  getToastGradient(type: string): string {
    switch (type) {
      case 'error':
        return 'bg-gradient-to-r from-red-50 to-white border-red-200';
      case 'success':
        return 'bg-gradient-to-r from-green-50 to-white border-green-200';
      case 'warning':
        return 'bg-gradient-to-r from-yellow-50 to-white border-yellow-200';
      case 'info':
        return 'bg-gradient-to-r from-blue-50 to-white border-blue-200';
      default:
        return 'bg-gradient-to-r from-gray-50 to-white border-gray-200';
    }
  }
  getToastStyle(type: string): string {
    switch (type) {
      case 'success':
        return 'bg-green-50 border border-green-300';
      case 'info':
        return 'bg-blue-50 border border-blue-300';
      case 'warning':
        return 'bg-yellow-50 border border-yellow-300';
      case 'error':
        return 'bg-red-50 border border-red-300';
      default:
        return 'bg-gray-50 border border-gray-300';
    }
  }

  getToastIcon(type: string): SafeHtml {
    let svg = '';
    switch (type) {
      case 'success':
        svg =
          '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>';
        break;
      case 'info':
        svg =
          '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="M400-240q-33 0-56.5-23.5T320-320v-50q-57-39-88.5-100T200-600q0-117 81.5-198.5T480-880q117 0 198.5 81.5T760-600q0 69-31.5 129.5T640-370v50q0 33-23.5 56.5T560-240H400Zm0-80h160v-92l34-24q41-28 63.5-71.5T680-600q0-83-58.5-141.5T480-800q-83 0-141.5 58.5T280-600q0 49 22.5 92.5T366-436l34 24v92Zm0 240q-17 0-28.5-11.5T360-120v-40h240v40q0 17-11.5 28.5T560-80H400Zm80-520Z"/></svg>';
        break;
      case 'warning':
        svg =
          '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"/></svg>';
        break;
      case 'error':
        svg =
          '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>';
        break;
      default:
        svg =
          '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>';
    }
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
  getIconColor(type: string): string {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'info':
        return 'bg-blue-500 ';
      case 'warning':
        return 'bg-yellow-500';
      case 'error':
        return 'bg-red-500 ';
      default:
        return 'bg-gray-500';
    }
  }
  getToastTextStyle(type: string): string {
    switch (type) {
      case 'success':
        return 'text-green-700';
      case 'info':
        return 'text-blue-700';
      case 'warning':
        return 'text-yellow-700';
      case 'error':
        return 'text-red-700';
      default:
        return 'text-gray-700';
    }
  }
  getToastIconStyle(type: string): string {
    switch (type) {
      case 'success':
        return 'text-green-500 bg-green-100';
      case 'info':
        return 'text-blue-500 bg-blue-100';
      case 'warning':
        return 'text-yellow-500 bg-yellow-100';
      case 'error':
        return 'text-red-500 bg-red-100';
      default:
        return 'text-gray-500 bg-gray-100';
    }
  }
  getbuttonHover(type: string): string {
    switch (type) {
      case 'success':
        return 'hover:bg-green-200';
      case 'info':
        return 'hover:bg-blue-200';
      case 'warning':
        return 'hover:bg-yellow-200';
      case 'error':
        return 'hover:bg-red-200';
      default:
        return 'hover:bg-green-200';
    }
  }
  getProgressBarStyle(type: string): string {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'info':
        return 'bg-blue-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  }
  getToastBubbleStyle(type: string): string {
    switch (type) {
      case 'success':
        return 'bg-green-300';
      case 'info':
        return 'bg-blue-300';
      case 'warning':
        return 'bg-yellow-300';
      case 'error':
        return 'bg-red-300';
      default:
        return 'bg-gray-300';
    }
  }
}
