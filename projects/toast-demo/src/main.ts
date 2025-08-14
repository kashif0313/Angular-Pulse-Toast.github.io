import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DemoComponent } from './app/demo.component';

bootstrapApplication(DemoComponent, {
  providers: [provideAnimations(), provideHttpClient()],
}).catch((err) => console.error(err));
