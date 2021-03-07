import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sentence:string;
  speed:number;
  chosenCharacter:string;
  constructor(private tts:TextToSpeech) {}

  speak(){
    if (this.speed == null) {
      this.speed = 1.2;
    }

    if (this.sentence == null) {
       this.sentence = "Wala kang nilagay tangina mo";
    }

    if (this.chosenCharacter == null) {
      this.chosenCharacter = "en-US";
    }
    
    this.tts.speak({
      text: this.sentence,
      rate: this.speed,
      locale: this.chosenCharacter,


    }).then(result => {
      console.log(result);
    }).catch(error => {
      console.log(error);
    });
  }

  us(){
    this.chosenCharacter = "en-US";
  }

   china(){
    this.chosenCharacter = "zh-CN";
  }


}
