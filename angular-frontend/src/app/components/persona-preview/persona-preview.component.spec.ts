import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaPreviewComponent } from './persona-preview.component';

describe('PersonaPreviewComponent', () => {
  let component: PersonaPreviewComponent;
  let fixture: ComponentFixture<PersonaPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
