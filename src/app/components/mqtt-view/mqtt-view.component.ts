import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMqttMessage } from 'ngx-mqtt';
import { Subscription } from 'rxjs';
import { EventMqttService } from '../../services/mqqt-service';


@Component({
  selector: 'app-mqtt-view',
  templateUrl: './mqtt-view.component.html',
  styleUrls: ['./mqtt-view.component.sass']
})
export class MqttViewComponent implements OnInit {

  events: any[] = [];
  private deviceId: string = 'sensor/all';
  subscription: Subscription = new Subscription();

  constructor(
    private readonly eventMqtt: EventMqttService,
  ) {
  }

  ngOnInit() {
    this.subscribeToTopic();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private subscribeToTopic() {
    this.subscription = this.eventMqtt.topic(this.deviceId)
      .subscribe({
        next: (data: IMqttMessage) => {
          let item = JSON.parse(data.payload.toString());
          this.events.push(item);
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('complete!');
        }
      });
  }
}

