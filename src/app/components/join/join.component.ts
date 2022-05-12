import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game, Player, size } from '../games';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  readonly ROOT_URL = 'https://poker-game-af21a-default-rtdb.firebaseio.com/';
  readonly Auth = '.json?auth=qkqbLjLfNE2euq5dRvw9Vc43oxZtpUxcEtE3O7Cc';
  Code = 'Game2';

  data : Observable<Game> | undefined;

  constructor(private http: HttpClient) { 
  }

  getGame() : Game{
    let g : Game = {};
    this.data = this.http.get<Game>(this.ROOT_URL+this.Code+this.Auth);
    this.data.forEach(x => {
      g.BigBlind = x.BigBlind;
      g.Players = x.Players;
      g.Playing = x.Playing;
      g.Pot = x.Pot;
      g.SmallBlind = x.SmallBlind;
      g.Turn = x.Turn;
      g.Winner = x.Winner;
    });

    console.log(g);
    return g;
  }

  createGame() : void {
    this.Code = 'Game3'

    let headers = new HttpHeaders().set('Content-Type','application/json');
    const g = {
      BigBlind: 1,
      Playing: true
    }

    this.http.put(this.ROOT_URL+this.Code+this.Auth, g).subscribe();

    console.log("Sent")
  }


  ngOnInit(): void {

  }



}
