import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskBoardComponent } from './desk-board.component';

describe('DeskBoardComponent', () => {
  let component: DeskBoardComponent;
  let fixture: ComponentFixture<DeskBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeskBoardComponent]
    });
    fixture = TestBed.createComponent(DeskBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
