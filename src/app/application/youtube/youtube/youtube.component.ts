import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { YoutubeVideo } from './youtubeVideo';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  videos: Array<YoutubeVideo>;
  videosList: Array<YoutubeVideo>;
  videoSelected: YoutubeVideo;
  yearSelected: number;
  year: string;

  constructor(private service: YoutubeService) {
    this.yearSelected = 1;
  }

  ngOnInit(): void {
    this.getVideos(this.yearSelected);
  }

  public getVideos(year: number): void {
    this.videos = this.service.getVideos(year);
  }

  public select(video: YoutubeVideo) {
    this.videoSelected = video;
  }

  public onChange($event: any) {
    this.yearSelected = $event.target.value;
    this.videos = this.service.getVideos(this.yearSelected);
  }
  
}