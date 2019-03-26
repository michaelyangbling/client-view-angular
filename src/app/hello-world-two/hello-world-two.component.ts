import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-two',
  templateUrl: './hello-world-two.component.html',
  styleUrls: ['./hello-world-two.component.css']
})
export class HelloWorldTwoComponent implements OnInit {
  message = "Hello World Component message";
  constructor() { }

  ngOnInit() {
  }

}
