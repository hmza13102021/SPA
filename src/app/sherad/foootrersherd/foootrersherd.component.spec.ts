import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoootrersherdComponent } from './foootrersherd.component';

describe('FoootrersherdComponent', () => {
  let component: FoootrersherdComponent;
  let fixture: ComponentFixture<FoootrersherdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoootrersherdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoootrersherdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
