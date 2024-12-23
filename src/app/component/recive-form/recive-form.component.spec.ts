import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciveFormComponent } from './recive-form.component';

describe('ReciveFormComponent', () => {
  let component: ReciveFormComponent;
  let fixture: ComponentFixture<ReciveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReciveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReciveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
