import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  pageTitle: string = 'Welcome to "&Ride!"';
  selected: Date | null = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
