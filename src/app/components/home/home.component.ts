import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coin } from '../../models/coin.interface';
import { CoinService } from '../../services/coin.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  coins: Coin[] = [];
  loading: boolean = true;
  loaded: boolean = false;
  show_cards: boolean = true;
  show_table: boolean = false;
  constructor(
    private coinService: CoinService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  setTable(): void {
    console.log('setTable');
    this.show_cards = false;
    this.show_table = true;
    localStorage.setItem('show_cards', this.show_cards ? 'true' : 'false');
    localStorage.setItem('show_table', this.show_table ? 'true' : 'false');
  }

  setCards(): void {
    console.log('setCards');
    this.show_cards = true;
    this.show_table = false;
    localStorage.setItem('show_cards', this.show_cards ? 'true' : 'false');
    localStorage.setItem('show_table', this.show_table ? 'true' : 'false');
  }

  openDetail(coin: Coin): void {
    console.log('openDetail');
    this.sharedService.setCoin(coin);
    this.router.navigate([`/coin/${coin.id}`]);
  }

  ngOnInit(): void {
    if (localStorage.getItem('show_cards')) {
      this.show_cards =
        localStorage.getItem('show_cards') === 'true' ? true : false;
      this.show_table =
        localStorage.getItem('show_table') === 'true' ? true : false;
    }
    if (this.show_cards && this.show_table === false) {
      this.show_cards = true;
    }
    this.coinService.getAllCoins().subscribe((coins) => {
      this.loading = false;
      this.loaded = true;
      this.coins = coins;
    });
  }
}
