import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterHomeComponent } from './counter-home.component';

describe('CounterHomeComponent', () => {
  let component: CounterHomeComponent;
  let fixture: ComponentFixture<CounterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
