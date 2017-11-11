import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `<p>hello WORLD</p>`,
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  title = "hello world";
  constructor() { }

  ngOnInit() {
  }

}
