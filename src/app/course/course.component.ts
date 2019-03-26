import { Component, OnInit } from '@angular/core';
import {CourseService} from "../services/CourseService";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private service: CourseService,
    private activatedRoute: ActivatedRoute) { 

  }
  courses = []
  ngOnInit() {
    this.service
    .findAllCourses()
    .then(courses => this.courses = courses )
    // this.activatedRoute.params
    //   .subscribe(
    //     params =>
    //     this.service
    // .findAllCourses()
    // .then(courses => this.courses = [{title:'me'}, {title:'me2'}])
    //   );
  }

}
