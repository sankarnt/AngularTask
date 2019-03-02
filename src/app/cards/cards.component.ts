import { Component, OnInit } from '@angular/core';
import { Developer } from '../developers';
import { DevelopersService } from '../developers.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(private developersService: DevelopersService) { }

  getDeveloperList = function() {
    this.developerList = this.developersService.getDeveloperList();
    // this.postList = this.developersService.getPost().subscribe((r) => {
    //   console.log(r);
    //   console.log("got back");
    // });
  }

  ngOnInit() {
    this.getDeveloperList();
  }

}
