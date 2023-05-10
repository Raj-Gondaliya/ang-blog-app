import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdcriptionFormComponent } from './subdcription-form.component';

describe('SubdcriptionFormComponent', () => {
  let component: SubdcriptionFormComponent;
  let fixture: ComponentFixture<SubdcriptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubdcriptionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubdcriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
