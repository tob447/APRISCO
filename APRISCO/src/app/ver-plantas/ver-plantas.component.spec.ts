import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPlantasComponent } from './ver-plantas.component';

describe('VerPlantasComponent', () => {
  let component: VerPlantasComponent;
  let fixture: ComponentFixture<VerPlantasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPlantasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
