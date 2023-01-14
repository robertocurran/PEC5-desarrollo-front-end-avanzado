import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { Coin } from '../../models/coin.interface';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() coins: Coin[] = [];
  displayedColumns: string[] = [
    'image',
    'id',
    'symbol',
    'current_price',
    'price_change_percentage_24h',
  ];
  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {}

  openDetail(coin: Coin): void {
    console.log('openDetail');
    this.sharedService.setCoin(coin);
    this.router.navigate([`/coin/${coin.id}`]);
  }
}
