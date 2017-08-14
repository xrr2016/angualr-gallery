import { Component, OnChanges, OnInit } from '@angular/core';
import { ImageService } from '../image/shared/image.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {
  title = 'Recents Photos'
  visiableImages: any[] = []

  constructor(private imageService: ImageService) { 
    this.visiableImages = this.imageService.getImages()
  }
  ngOnChanges () {
  }
  ngOnInit() {
  }
}

