import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-little-block',
  templateUrl: './little-block.component.html',
  styleUrls: ['./little-block.component.scss']
})
export class LittleBlockComponent implements OnInit {
  
  @Input() text   :string = "Title";
  @Input() image  :string = "../../../assets/img/404.jpg";
  @Input() link   :string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
