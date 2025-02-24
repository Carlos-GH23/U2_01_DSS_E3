import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoneListPageComponent } from './persone-list-page.component';

describe('PersoneListPageComponent', () => {
  let component: PersoneListPageComponent;
  let fixture: ComponentFixture<PersoneListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersoneListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersoneListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
