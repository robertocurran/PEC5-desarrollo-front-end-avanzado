import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from '../models/coin.interface';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  constructor(private http: HttpClient) {}

  getAllCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=false'
    );
  }
}
