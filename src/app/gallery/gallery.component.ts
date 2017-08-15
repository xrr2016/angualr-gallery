import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { ImageService } from '../shared/image.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {
  title = 'Recents Photos'
  @Input() filterBy?: string = 'all'

  visiableImages: any[] = []
  constructor(private imageService: ImageService) { 
    this.visiableImages = this.imageService.getImages()
  }
  ngOnChanges () {
    this.visiableImages = this.imageService.getImages()
  }
  ngOnInit () {

  }
}

