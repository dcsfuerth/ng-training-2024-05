import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test234Component } from './test234.component';

describe('Test234Component', () => {
  let component: Test234Component;
  let fixture: ComponentFixture<Test234Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Test234Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Test234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
