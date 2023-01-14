import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coin } from '../../models/coin.interface';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css'],
})
export class CoinDetailComponent implements OnInit {
  @Input() item: Coin = {
    id: '',
    symbol: '',
    name: '',
    image: '',
    current_price: 0,
    market_cap: 0,
    market_cap_rank: 0,
    fully_diluted_valuation: 0,
    total_volume: 0,
    high_24h: 0,
    low_24h: 0,
    price_change_24h: 0,
    price_change_percentage_24h: 0,
    market_cap_change_24h: 0,
    market_cap_change_percentage_24h: 0,
    circulating_supply: 0,
    total_supply: 0,
    max_supply: 0,
    ath: 0,
    ath_change_percentage: 0,
    ath_date: '',
    atl: 0,
    atl_change_percentage: 0,
    atl_date: '',
    roi: null,
    last_updated: '',
  };

  panelOpenState: boolean = false;

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.item = this.sharedService.getCoin();
  }

  back(): void {
    this.router.navigate(['']);
  }
}
