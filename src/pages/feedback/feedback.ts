import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DupFeedbackPage } from '../dupfeedback/dupfeedback';

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
  template : `
  <div class="bar bar-header bar-light">
  <h1 class="title">Feedback</h1>
  </div>
  <label class="item item-input item-select">
  <div class="input-label">
    Are you satisfied with the Stopover holidays?
  </div>

  <ion-card class = "selectionBox">
  <select>
    <option>Happy</option>
    <option selected>Average</option>
    <option>Unhappy</option>
  </select>
  </ion-card>
</label>

<label class="item item-input item-select">
  <div class="input-label">
    What do you think about our services?
  </div>

  <ion-card class = "selectionBox">
  <select>
    <option>Good</option>
    <option>Needs improvement</option>
  </select>
  </ion-card>
</label>

<form (ngSubmit)="logForm()">
<ion-item class="form">
  <ion-label >Others</ion-label>
  <ion-textarea [(ngModel)]="feedback.others" name="others"></ion-textarea>
</ion-item>
<button ion-button type="submit" block  [navPush]="anotherPage">Submit</button>
</form>
<button ion-button block>Refresh</button>
`

})
export class FeedbackPage {
  anotherPage = DupFeedbackPage;

  feedback = {}
  constructor(public navCtrl: NavController) {
  }

  logForm() {
    console.log(this.feedback);
    alert("Feedback form submitted.");
  }
}

