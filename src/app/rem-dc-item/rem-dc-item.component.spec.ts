import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemDcItemComponent } from './rem-dc-item.component';

describe('RemDcItemComponent', () => {
  let component: RemDcItemComponent;
  let fixture: ComponentFixture<RemDcItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemDcItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemDcItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
