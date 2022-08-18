import { Component, OnInit } from '@angular/core';
import { faAndroid, faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faAndroid = faAndroid
  faFacebook = faFacebook
  faInstagram = faInstagram
  faLinkedin = faLinkedin
  faTwitter = faTwitter
  faYoutube = faYoutube
  faLocation = faLocationDot
  faEnvelope = faEnvelope

  constructor() { }

  ngOnInit(): void {
  }

}
