import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemDcListComponent } from './rem-dc-list.component';

describe('RemDcListComponent', () => {
  let component: RemDcListComponent;
  let fixture: ComponentFixture<RemDcListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemDcListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemDcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
