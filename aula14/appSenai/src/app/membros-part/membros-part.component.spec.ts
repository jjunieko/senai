import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrosPartComponent } from './membros-part.component';

describe('MembrosPartComponent', () => {
  let component: MembrosPartComponent;
  let fixture: ComponentFixture<MembrosPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembrosPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembrosPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
