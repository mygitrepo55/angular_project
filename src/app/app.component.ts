import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReaformComponent } from "./reaform/reaform.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ReaformComponent],
})
export class AppComponent {
  title = 'test2';
}
