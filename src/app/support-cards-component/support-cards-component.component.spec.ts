import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportCardsComponentComponent } from './support-cards-component.component';

describe('SupportCardsComponentComponent', () => {
  let component: SupportCardsComponentComponent;
  let fixture: ComponentFixture<SupportCardsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportCardsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportCardsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
