import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoneAddPageComponent } from './persone-add-page.component';

describe('PersoneAddPageComponent', () => {
  let component: PersoneAddPageComponent;
  let fixture: ComponentFixture<PersoneAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersoneAddPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersoneAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
