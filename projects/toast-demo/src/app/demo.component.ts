import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPulseToastModule, ToastService } from 'ngx-pulse-toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPulseToastModule],
  template: `
    <div class="container">
      <header class="page-header card">
        <div class="title-row">
          <h1>ngx-pulse-toast demo</h1>
          <p class="subheading">
            Show different toast types, designs, positions, and actions.
          </p>
        </div>
      </header>

      <section class="card">
        <h3 class="card-title">Controls</h3>
        <form class="form-grid" (submit)="showToast(); $event.preventDefault()">
          <div class="field">
            <label for="msg">Message</label>
            <input
              id="msg"
              type="text"
              [(ngModel)]="message"
              name="message"
              placeholder="Enter message"
            />
          </div>

          <div class="field">
            <label for="type">Type</label>
            <select id="type" [(ngModel)]="type" name="type">
              <option value="success">success</option>
              <option value="info">info</option>
              <option value="warning">warning</option>
              <option value="error">error</option>
            </select>
          </div>

          <div class="field">
            <label for="design">Design</label>
            <select id="design" [(ngModel)]="design" name="design">
              <option value="basic">basic</option>
              <option value="modern">modern</option>
              <option value="elegent">elegent</option>
            </select>
          </div>

          <div class="field">
            <label for="position">Position</label>
            <select id="position" [(ngModel)]="position" name="position">
              <option>top-left</option>
              <option>top-center</option>
              <option>top-right</option>
              <option>bottom-left</option>
              <option>bottom-center</option>
              <option>bottom-right</option>
            </select>
          </div>

          <div class="field">
            <label for="duration">Duration (ms)</label>
            <input
              id="duration"
              type="number"
              [(ngModel)]="duration"
              name="duration"
              min="500"
              step="500"
            />
          </div>

          <div class="switches">
            <label class="switch"
              ><input
                type="checkbox"
                [(ngModel)]="withActions"
                name="withActions"
              />
              With actions</label
            >
            <label class="switch"
              ><input type="checkbox" [(ngModel)]="showIcon" name="showIcon" />
              Show icon</label
            >
            <label class="switch"
              ><input
                type="checkbox"
                [(ngModel)]="showProgressBar"
                name="showProgressBar"
              />
              Progress bar</label
            >
            <label class="switch"
              ><input type="checkbox" [(ngModel)]="stack" name="stack" /> Stack
              multiple</label
            >
          </div>

          <div class="actions">
            <button type="submit" class="btn btn-primary">Show toast</button>
          </div>
        </form>
      </section>

      <section class="grid">
        <div class="card">
          <h3 class="card-title">Quick actions</h3>
          <div class="controls">
            <button class="btn" (click)="quick('success')">Success</button>
            <button class="btn" (click)="quick('info')">Info</button>
            <button class="btn" (click)="quick('warning')">Warning</button>
            <button class="btn" (click)="quick('error')">Error</button>
          </div>
        </div>

        <div class="card">
          <h3 class="card-title">Actionable toast</h3>
          <div class="controls">
            <button class="btn btn-outline" (click)="actionToast()">
              Show action toast
            </button>
          </div>
        </div>
      </section>
    </div>

    <ngx-pulse-toast
      [design]="design"
      [position]="position"
      [showIcon]="showIcon"
      [showProgressBar]="showProgressBar"
      [stack]="stack"
    ></ngx-pulse-toast>
  `,
  styles: [],
})
export class DemoComponent {
  message = 'Hello from ngx-pulse-toast!';
  type: 'success' | 'info' | 'warning' | 'error' = 'success';
  design: 'basic' | 'modern' | 'elegent' = 'basic';
  position = 'top-center';
  duration = 3000;
  withActions = false;
  showIcon = true;
  showProgressBar = true;
  stack = true;

  constructor(private toast: ToastService) {}

  showToast() {
    this.toast
      .show(this.message, this.type, {
        duration: this.duration,
        withActions: this.withActions,
        acceptButtonLabel: 'Yes',
        cancelButtonLabel: 'No',
      })
      .subscribe((res: 'accept' | 'cancel') => console.log('action:', res));
  }

  quick(t: 'success' | 'info' | 'warning' | 'error') {
    this.toast.show(`${t} toast`, t, { duration: 2500 });
  }

  actionToast() {
    this.toast
      .show('Do you want to proceed?', 'info', {
        withActions: true,
        duration: 6000,
        acceptButtonLabel: 'Proceed',
        cancelButtonLabel: 'Dismiss',
      })
      .subscribe((res: 'accept' | 'cancel') => console.log('User chose:', res));
  }
}
