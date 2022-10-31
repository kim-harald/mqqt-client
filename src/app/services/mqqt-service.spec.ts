import { TestBed } from '@angular/core/testing';

import { EventMqttService } from './mqqt-service';

describe('MqqtService', () => {
  let service: EventMqttService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventMqttService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
