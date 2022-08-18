import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openSearch', [
      state('true', style({
        width: '0',
      })),
      state('false', style({
        width: '100%'
      })),
      transition('true => false', animate('500ms ease-in')),
      transition('false => true', animate('500ms ease-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass
  faUser = faUser
  faXmark = faXmark
  showSearchIcon = true

  constructor() { }

  ngOnInit(): void {
  }

  toggleSearchIcon(){
    this.showSearchIcon = !this.showSearchIcon
  }
}

