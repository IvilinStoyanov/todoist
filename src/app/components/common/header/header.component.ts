import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links = [
    { title: 'Home', fragment: '' },
    { title: 'Tasks', fragment: 'tasks' },
    { title: 'Create Task', fragment: 'create-task' }
  ];


  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
  }

}
