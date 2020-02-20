import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear: any;
  constructor() { }

  ngOnInit() {
    this. getCurrentYear();
  }
  getCurrentYear(){
    const fecha = new Date();
    this.currentYear = fecha.getFullYear();
  }

}
