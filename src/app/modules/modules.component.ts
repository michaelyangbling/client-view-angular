import { Component, OnInit } from '@angular/core';
import {ModuleService} from "../services/ModuleService";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {


  

  constructor(private service: ModuleService,
    private activatedRoute: ActivatedRoute, private router: Router) { 
      console.log("mod contructed")
  }
  modules = []

  selectModule = module => {
    // /course/:courseId/module/:moduleId/lesson
    console.log(this.router.url, 'xx')
    this.router.navigate([this.router.url+'/'+String(module.id)+'/lesson'])
  }
  ngOnInit() {
    // this.service
    // .findAllCourses()
    // .then(courses => this.courses = courses )
    this.activatedRoute.params
      .subscribe(
        params =>
        this.service
    .findModulesForCourse(params.courseId)
    .then(modules => {this.modules = modules; console.log('sub')})
      );
  }

}
