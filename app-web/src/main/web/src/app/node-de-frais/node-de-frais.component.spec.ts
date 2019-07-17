import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeDeFraisComponent } from './node-de-frais.component';

describe('NodeDeFraisComponent', () => {
  let component: NodeDeFraisComponent;
  let fixture: ComponentFixture<NodeDeFraisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeDeFraisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeDeFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
