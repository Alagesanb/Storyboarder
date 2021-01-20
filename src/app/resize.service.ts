import { Injectable, Input, Output  } from '@angular/core';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';


export enum SCREEN_SIZE {
  XS,
  SM,
  MD,
  LG,
  XL
}

@Injectable({
  providedIn: 'root'
})
export class ResizeService {

  @Input() screen: SCREEN_SIZE;
  @Output() screensize: SCREEN_SIZE;

  get onResize$(): Observable<SCREEN_SIZE> {
    return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
  }

  private resizeSubject: Subject<SCREEN_SIZE>;

  constructor() { 
    this.resizeSubject = new Subject();
  }

  onResize(size: SCREEN_SIZE) {
    this.resizeSubject.next(size);
  }
}
