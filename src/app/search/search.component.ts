import { Router } from '@angular/router';
import { Artist } from './../../Artists';
import { SpotifyService } from './../spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private searchStr : string;
  private searchRes : Artist[];

  constructor(private musicService : SpotifyService , private router: Router) { }

  ngOnInit() {
  }

  searchMusic() {
    this.musicService.searchMusic(this.searchStr)
    .subscribe( res => {
      this.searchRes = res.artists.items ;
    }
    );
  }

}
