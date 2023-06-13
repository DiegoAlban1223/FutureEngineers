import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaeditaTutorsComponent } from './creaedita-tutors.component';

describe('CreaeditaTutorsComponent', () => {
  let component: CreaeditaTutorsComponent;
  let fixture: ComponentFixture<CreaeditaTutorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaeditaTutorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaeditaTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
