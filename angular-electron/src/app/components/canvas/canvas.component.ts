import {
    Component, Input, ElementRef, AfterViewInit, ViewChild
  } from '@angular/core';
  
  @Component({
    selector: 'app-canvas',
    template: '<canvas #canvas></canvas>',
    styles: ['canvas { border: 1px solid #000; }']
  })
  export class CanvasComponent implements AfterViewInit {
    // a reference to the canvas element from our template
    @ViewChild('canvas') public canvas: ElementRef;
  
    // setting a width and height for the canvas
    @Input() public width = 400;
    @Input() public height = 400;
  
    private ctx: CanvasRenderingContext2D;  
    
    public ngAfterViewInit() {
      // get the context
      const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
      this.ctx = canvasEl.getContext('2d');
  
      // set the width and height
      canvasEl.width = this.width;
      canvasEl.height = this.height;
  
      this.ctx.beginPath();
      this.ctx.rect(0, 0, canvasEl.width, canvasEl.height);
      this.ctx.fillStyle = "blue";
      this.ctx.fill();


      
      // we'll implement this method to start capturing mouse events
    }
  }