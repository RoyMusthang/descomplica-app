import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'descomplica';
  description1 = 'dereguejhonson'
  value = ''

  isPremium = false


  items = [
    { value:"mid"},
    { value:"top"},
    { value:"jungle"},
    { value:"adc"},
    { value:"sup"}
  ]

  adicionarItem() {
    this.items.push(
      {value: this.value}
    )
  }

  removeItem() {
    this.items.pop()
  }
}
