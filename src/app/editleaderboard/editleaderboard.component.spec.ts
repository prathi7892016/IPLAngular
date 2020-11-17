import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditleaderboardComponent } from './editleaderboard.component';

describe('EditleaderboardComponent', () => {
  let component: EditleaderboardComponent;
  let fixture: ComponentFixture<EditleaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditleaderboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditleaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
