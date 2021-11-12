import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunaListComponent } from './vacuna-list.component';

describe('VacunaListComponent', () => {
  let component: VacunaListComponent;
  let fixture: ComponentFixture<VacunaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacunaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacunaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
