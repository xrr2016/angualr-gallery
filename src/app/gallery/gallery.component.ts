import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  title = 'Recents Photos'
  constructor() { }
  ngOnInit() {
  }
}
