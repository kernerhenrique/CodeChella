import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDeSetoresComponent } from './mapa-de-setores.component';

describe('MapaDeSetoresComponent', () => {
  let component: MapaDeSetoresComponent;
  let fixture: ComponentFixture<MapaDeSetoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapaDeSetoresComponent]
    });
    fixture = TestBed.createComponent(MapaDeSetoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
