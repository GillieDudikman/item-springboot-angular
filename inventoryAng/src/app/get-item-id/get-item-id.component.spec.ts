import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetItemIdComponent } from './get-item-id.component';

describe('GetItemIdComponent', () => {
  let component: GetItemIdComponent;
  let fixture: ComponentFixture<GetItemIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetItemIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetItemIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
