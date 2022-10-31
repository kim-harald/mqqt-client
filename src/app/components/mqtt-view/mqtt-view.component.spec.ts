import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MqttViewComponent } from './mqtt-view.component';

describe('MqttViewComponent', () => {
  let component: MqttViewComponent;
  let fixture: ComponentFixture<MqttViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MqttViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MqttViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
