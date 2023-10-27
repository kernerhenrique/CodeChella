import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngressoEmitidoComponent } from './ingresso-emitido.component';

describe('IngressoEmitidoComponent', () => {
  let component: IngressoEmitidoComponent;
  let fixture: ComponentFixture<IngressoEmitidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngressoEmitidoComponent]
    });
    fixture = TestBed.createComponent(IngressoEmitidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
