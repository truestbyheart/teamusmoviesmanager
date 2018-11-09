import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { YtsService } from '../../shared/yts.service';

@Component({
  selector: 'app-download-section',
  templateUrl: './download-section.component.html',
  styleUrls: ['./download-section.component.css']
})
export class DownloadSectionComponent implements OnInit {
  private Downlables = [];
  private Title = [];

  @Input('movieTitle') movieTitle = [];
  constructor(private yts: YtsService) { }

  ngOnInit() {
    console.log(this.movieTitle);
   // this.getDownloadFile();
  }
  getDownloadFile(title: string) {
   this.yts.getDownlodableTorrent(title).subscribe((data: Array<object>) => {
      this.Downlables = data;
      console.log(this.Downlables);
   });
  }

}
