import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegedataComponent } from './collegedata.component';

describe('CollegedataComponent', () => {
  let component: CollegedataComponent;
  let fixture: ComponentFixture<CollegedataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegedataComponent]
    });
    fixture = TestBed.createComponent(CollegedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
