import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  withActions?: boolean;
  action$?: Subject<'accept' | 'cancel'>;
  acceptButtonLabel?: string;
  cancelButtonLabel?: string;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private idCounter = 0;
  private toastSubject = new Subject<Toast>();
  toast$ = this.toastSubject.asObservable();

  show(
    message: string,
    type: Toast['type'] = 'info',
    options: Partial<Omit<Toast, 'id' | 'message' | 'type' | 'action$'>> = {}
  ): Observable<'accept' | 'cancel'> {
    const action$ = new Subject<'accept' | 'cancel'>();

    const defaultValues: Partial<Toast> = {
      duration: 13000,
      withActions: false,
      acceptButtonLabel: 'Show Me',
      cancelButtonLabel: 'Cancel',
    };

    // Merge default values with user options
    const toast: Toast = {
      id: this.idCounter++,
      message,
      type,
      action$,
      ...defaultValues,
      ...options,
    };

    this.toastSubject.next(toast);
    return action$.asObservable();
  }
}
