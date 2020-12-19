import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMemberComponent } from './read-member.component';

describe('ReadMemberComponent', () => {
  let component: ReadMemberComponent;
  let fixture: ComponentFixture<ReadMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
