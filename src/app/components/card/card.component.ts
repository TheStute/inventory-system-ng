import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.styl']
})
export class CardComponent implements OnInit {

  @Input() name: string;
  @Input() location: string;
  @Input() id: string;

  constructor() { }

  ngOnInit() {
  }

}
