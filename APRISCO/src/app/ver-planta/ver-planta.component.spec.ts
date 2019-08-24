import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPlantaComponent } from './ver-planta.component';

describe('VerPlantaComponent', () => {
  let component: VerPlantaComponent;
  let fixture: ComponentFixture<VerPlantaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPlantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
