import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersherdComponent } from './headersherd.component';

describe('HeadersherdComponent', () => {
  let component: HeadersherdComponent;
  let fixture: ComponentFixture<HeadersherdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadersherdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadersherdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
