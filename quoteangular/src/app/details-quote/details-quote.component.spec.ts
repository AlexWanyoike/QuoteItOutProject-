import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsQuoteComponent } from './details-quote.component';

describe('DetailsQuoteComponent', () => {
  let component: DetailsQuoteComponent;
  let fixture: ComponentFixture<DetailsQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
