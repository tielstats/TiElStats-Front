import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.css']
})
export class ButtonIconComponent implements OnInit {

  @Input() background: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
