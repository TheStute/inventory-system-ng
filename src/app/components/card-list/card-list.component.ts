import { Component, OnInit } from '@angular/core';
import {ItemsService} from "../../services/items.service";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.styl']
})
export class CardListComponent implements OnInit {
  private cards: object[] = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.getItems().subscribe((items) => {
      this.cards = items;
    })
  }

}
