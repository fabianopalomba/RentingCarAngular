import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelezionaautoComponent } from './selezionaauto.component';

describe('SelezionaautoComponent', () => {
  let component: SelezionaautoComponent;
  let fixture: ComponentFixture<SelezionaautoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelezionaautoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelezionaautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
