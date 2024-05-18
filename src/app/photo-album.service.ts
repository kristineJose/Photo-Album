import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoAlbumService {

  private albums: any[] = [
    { id: 1, name: 'Family Vacation' },
    { id: 2, name: 'Graduation Day' },
    { id: 3, name: 'Birthday Party' }
  ];

  constructor() { }

  getAlbums() {
    return this.albums;
  }

  getAlbumById(id: number) {
    return this.albums.find(album => album.id === id);
  }
}
