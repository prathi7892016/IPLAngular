import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeamdetailsComponent } from './edit-teamdetails.component';

describe('EditTeamdetailsComponent', () => {
  let component: EditTeamdetailsComponent;
  let fixture: ComponentFixture<EditTeamdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTeamdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTeamdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
