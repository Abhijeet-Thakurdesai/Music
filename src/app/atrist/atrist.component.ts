import { ActivatedRoute } from '@angular/router';
import { Album } from './../../Album';
import { Artist } from './../../Artists';
import { SpotifyService } from './../spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atrist',
  templateUrl: './atrist.component.html',
  styleUrls: ['./atrist.component.css']
})
export class AtristComponent implements OnInit {

  private id: string;
  private artist: Artist[];
  private albums: Album[];
  constructor(private musicSvc: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.musicSvc.getArtist(id)
          .subscribe(artist => {
            this.artist = artist;
          })

        this.musicSvc.getAlbums(id)
          .subscribe(albums => {
            this.albums = albums.items;
          })

      })

  }

}
