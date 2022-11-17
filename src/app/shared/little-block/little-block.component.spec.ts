import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleBlockComponent } from './little-block.component';

describe('LittleBlockComponent', () => {
  let component: LittleBlockComponent;
  let fixture: ComponentFixture<LittleBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittleBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LittleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
