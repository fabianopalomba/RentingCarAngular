import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelezionadateComponent } from './selezionadate.component';

describe('SelezionadateComponent', () => {
  let component: SelezionadateComponent;
  let fixture: ComponentFixture<SelezionadateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelezionadateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelezionadateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
