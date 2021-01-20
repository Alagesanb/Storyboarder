import { Component, OnInit, ElementRef } from '@angular/core';
import { ResizeService} from '../resize.service';

export enum SCREEN_SIZE {
  XS,
  SM,
  MD,
  LG,
  XL
}

@Component({
  selector: 'app-sizedetector',
  templateUrl: './sizedetector.component.html',
  styleUrls: ['./sizedetector.component.css']
})
export class SizedetectorComponent implements OnInit {

  prefix = 'is-';
  sizes = [
    {
      id: SCREEN_SIZE.XS, name: 'xs', css: `d-block d-sm-none`
    },
    {
      id: SCREEN_SIZE.SM, name: 'sm', css: `d-none d-sm-block d-md-none`
    },
    {
      id: SCREEN_SIZE.MD, name: 'md', css: `d-none d-md-block d-lg-none`
    },
    {
      id: SCREEN_SIZE.LG, name: 'lg', css: `d-none d-lg-block d-xl-none`
    },
    {
      id: SCREEN_SIZE.XL, name: 'xl', css: `d-none d-xl-block`
    },
  ];


  constructor(private elementRef: ElementRef, private resizeSvc: ResizeService) { }

  currentSize = this.sizes.find(x => {
    // get the HTML element
    const el = this.elementRef.nativeElement.querySelector(`.${this.prefix}${x.id}`);

    // check its display property value
    const isVisible = window.getComputedStyle(el).display != 'none';

    return isVisible;
  });

 

  ngOnInit(): void {

    this.resizeSvc.onResize(this.currentSize.id);

  }

  

}
