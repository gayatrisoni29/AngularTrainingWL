import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-component',
  templateUrl: './film-component.component.html',
  styleUrls: ['./film-component.component.scss']
})
export class FilmComponentComponent implements OnInit {

  @Input() poster = '';
  @Input() title = '';
  @Input() metascore = '';
  @Input() released = '';
  @Input() director = '';
  @Input() actors = '';
  @Input() plot = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
