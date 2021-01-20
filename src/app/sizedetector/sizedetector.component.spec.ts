import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizedetectorComponent } from './sizedetector.component';

describe('SizedetectorComponent', () => {
  let component: SizedetectorComponent;
  let fixture: ComponentFixture<SizedetectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizedetectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizedetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
