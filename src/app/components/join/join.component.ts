import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game, Player } from '../games';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  readonly ROOT_URL = 'https://poker-game-af21a-default-rtdb.firebaseio.com/';
  readonly Auth = '.json?auth=qkqbLjLfNE2euq5dRvw9Vc43oxZtpUxcEtE3O7Cc';
  readonly Code = 'Game1';

  data : Observable<Game> | undefined;

  constructor(private http: HttpClient) { 
  }

  getGames() : Game{
    let g : Game = {};
    this.data = this.http.get<Game>(this.ROOT_URL+this.Code+this.Auth);
    this.data.forEach(x => {
      g.BigBlind = x.BigBlind;
      g.Players = x.Players;
      g.Playing = x.Playing;
      g.Pot = x.Pot;
      g.SmallBlind = x.SmallBlind;
      g.Turn = x.Turn;
      g.id = x.id;
      g.Winner = x.Winner;
    });

    return g;
  }

  createGame() : void {

  }


  ngOnInit(): void {
    let game : Game = this.getGames();
    console.log(game);
  }



}
