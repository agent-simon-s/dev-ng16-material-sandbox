import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>
      Hello There!
    </h1>
    <h2>This is a sandbox for sketching out and testing various newer angular paterns, and the latest version of angular material</h2>
  `,
  styleUrl: './page-home.component.scss'
})
export class PageHomeComponent {

}
