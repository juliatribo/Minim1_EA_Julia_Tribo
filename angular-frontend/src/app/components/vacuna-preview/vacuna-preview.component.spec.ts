import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunaPreviewComponent } from './vacuna-preview.component';

describe('VacunaPreviewComponent', () => {
  let component: VacunaPreviewComponent;
  let fixture: ComponentFixture<VacunaPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacunaPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacunaPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
