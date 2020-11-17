import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamdetailsListComponent } from './teamdetails-list.component';

describe('TeamdetailsListComponent', () => {
  let component: TeamdetailsListComponent;
  let fixture: ComponentFixture<TeamdetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamdetailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamdetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
