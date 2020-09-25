import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteDeRotaComponent } from './teste-de-rota.component';

describe('TesteDeRotaComponent', () => {
  let component: TesteDeRotaComponent;
  let fixture: ComponentFixture<TesteDeRotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteDeRotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteDeRotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
