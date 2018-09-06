import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'casenet';
  // constructor(public isShown: boolean) {}
  public isShown: Boolean = false;
  onShown() {
    this.isShown = true;
  }
  public getRecord(data: any): void {
    this.isShown = data;
  }
}
