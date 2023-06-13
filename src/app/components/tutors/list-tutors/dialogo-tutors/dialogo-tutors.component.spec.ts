import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoTutorsComponent } from './dialogo-tutors.component';

describe('DialogoTutorsComponent', () => {
  let component: DialogoTutorsComponent;
  let fixture: ComponentFixture<DialogoTutorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoTutorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
