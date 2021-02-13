import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAmountComponent } from './remove-amount.component';

describe('RemoveAmountComponent', () => {
  let component: RemoveAmountComponent;
  let fixture: ComponentFixture<RemoveAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
