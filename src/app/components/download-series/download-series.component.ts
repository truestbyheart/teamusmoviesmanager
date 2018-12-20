import { Component, OnInit, Input } from '@angular/core';

import { Series } from './../../series';
import { TeamusapiService } from './../../teamusapi.service';

@Component({
  selector: 'app-download-series',
  templateUrl: './download-series.component.html',
  styleUrls: ['./download-series.component.css']
})
export class DownloadSeriesComponent implements OnInit {
  @Input() id: number;
  series: Series[];
  error: any;
  name: any;
  loading = true;
  constructor(private tas: TeamusapiService) { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
    this.getInfo(this.id);
  }

  getInfo(id: number) {
    this.tas.getdetails(id).subscribe((data: Array<object>) => {
     this.name = data['original_name'];
     this.getFiles(this.name);
    });
  }

 getFiles(title: any) {
 this.tas.getSeries(title).subscribe(
   (res: Series[]) => {
   this.series = res;
   },
   (err) => {
     this.error = err;
   }
 );
 }

}
