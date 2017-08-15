import { Routes } from '@angular/router' 
import { GalleryComponent } from './gallery/gallery.component'
import { ImageComponent } from './image/image.component'

export const routes:Routes = [
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'image/:id',
    component: ImageComponent
  },
  {
    path: "",
    redirectTo: "/gallery",
    pathMatch: 'full'
  }
]