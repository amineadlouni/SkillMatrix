import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorStationsComponent } from './operator-stations.component';

describe('OperatorStationsComponent', () => {
  let component: OperatorStationsComponent;
  let fixture: ComponentFixture<OperatorStationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperatorStationsComponent]
    });
    fixture = TestBed.createComponent(OperatorStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
