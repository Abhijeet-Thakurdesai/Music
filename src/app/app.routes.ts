import { AlbumComponent } from './album/album.component';
import { AtristComponent } from './atrist/atrist.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'artist/:id', component: AtristComponent }
];

export const routing = RouterModule.forRoot(appRoutes);