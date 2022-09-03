import { Component, OnInit } from '@angular/core';
import {ContentService} from '../../services/content.service'
import { Content } from '../../Content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  data: any= [];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getContent().subscribe((data) => {this.data = data 
      console.log(this.data)});
  }
}