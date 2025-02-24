import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonePageComponent } from './persone-page.component';

describe('PersonePageComponent', () => {
  let component: PersonePageComponent;
  let fixture: ComponentFixture<PersonePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
