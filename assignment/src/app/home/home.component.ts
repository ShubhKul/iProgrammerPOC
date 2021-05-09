import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public imageData: any = [];
  public imageTableList: any = [];
  public isCompare: any = [];

  constructor(private homeService: HomeService, private ngxUiLoaderService: NgxUiLoaderService) { }

  ngOnInit() {
    this.getImageData();
  }

  public getImageData(): void {
    this.ngxUiLoaderService.start();
    this.homeService.fetchALlimageList().subscribe(
      (res) => {
        this.ngxUiLoaderService.stop();
        this.imageData = res;
        for(let i = 0; i<= 9; i++) {
          this.isCompare[i] = false;
        }
      }, (error) => {
        this.ngxUiLoaderService.stop();
      });
  }

  public onCompareImages(imgObject: any, index: number): void {
    this.isCompare[index] = true;
    this.imageTableList.push({
      "id": imgObject.id,
      "url": imgObject.url,
      "title": imgObject.title
    })
  }

  public onRemoveImages(imgObject: any, index: number): void {
    this.isCompare[index] = false;
    this.imageTableList.splice(this.imageTableList.findIndex(a => a.id === imgObject.id) , 1);
  }

}
