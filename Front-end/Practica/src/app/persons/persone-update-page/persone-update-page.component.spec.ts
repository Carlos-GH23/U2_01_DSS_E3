import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoneUpdatePageComponent } from './persone-update-page.component';

describe('PersoneUpdatePageComponent', () => {
  let component: PersoneUpdatePageComponent;
  let fixture: ComponentFixture<PersoneUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersoneUpdatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersoneUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
