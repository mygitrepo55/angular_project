import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaformComponent } from './reaform.component';

describe('ReaformComponent', () => {
  let component: ReaformComponent;
  let fixture: ComponentFixture<ReaformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReaformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
