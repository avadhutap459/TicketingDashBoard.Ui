import { inject, Injectable } from '@angular/core';
import { CanDeactivate, CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  isDirty(): boolean; // 👈 function we'll implement in component
}

@Injectable({ providedIn: 'root' })

export class UnsavedChangesGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate
  ): Observable<boolean> | Promise<boolean> | boolean {

    if (component.isDirty()) {
      return confirm("You have unsaved changes. Do you really want to leave?");
    }

    return true;
  }
}