import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lo-header-main',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="hdr-main">
      LOGO 
    </header>
  `,
  styleUrl: './lo-header-main.component.scss'
})
export class LoHeaderMainComponent {

}
