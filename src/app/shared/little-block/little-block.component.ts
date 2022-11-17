import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-little-block',
  templateUrl: './little-block.component.html',
  styleUrls: ['./little-block.component.scss']
})
export class LittleBlockComponent implements OnInit {
  
  public text  :string = "Starships";
  public image :string = "../../../assets/img/404.jpg";
  public link  :string = "/starships";

  constructor() { }

  ngOnInit(): void {
  }

}
