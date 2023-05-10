import { Component } from '@angular/core';
import { Subs } from '../models/subs';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subdcription-form',
  templateUrl: './subdcription-form.component.html',
  styleUrls: ['./subdcription-form.component.css']
})
export class SubdcriptionFormComponent {
  isEmailError: boolean = false;
  isSubscribed: boolean = false;

  constructor(private subsService: SubscribersService) { }

  ngOnInit(): void { }

  onSubmit(subsFormVal: any) {
    const subsData: Subs = {
      name: subsFormVal.name,
      email: subsFormVal.email
    }
    this.subsService.checkSubs(subsData.email).subscribe(val => {
      if (val.empty) {
        this.subsService.addSubs(subsData);
        this.isSubscribed = true;
      } else {
        console.log('Email is already in use');
        this.isEmailError = true;
      }
    });
  }
}
