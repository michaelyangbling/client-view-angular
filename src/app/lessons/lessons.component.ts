import { Component, OnInit } from '@angular/core';
import {LessonService} from "../services/LessonService";
import {ModuleService} from "../services/ModuleService";

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {


  

  constructor(private lessonService: LessonService, private moduleService: ModuleService,
    private activatedRoute: ActivatedRoute, private router: Router) { 
  }
  modules= []
  params = undefined
  lessons = []

  selectModule = module => {
    // to: /course/:courseId/module/:moduleId/lesson
    this.router.navigate(['course', this.params.courseId, 'module', module.id, 'lesson'])
  }

  selectLesson = lesson => {
    // to: /course/:courseId/module/:moduleId/lesson/:lessonId/topic
    console.log(lesson, lesson.id, 'wtf')
    this.router.navigate(['course', this.params.courseId, 'module', this.params.moduleId, 'lesson',
                          String(lesson.id), 'topic'])
  }

  ngOnInit() {
    // /course/:courseId/module/:moduleId/lesson
    this.activatedRoute.params
      .subscribe(
        params =>
        this.moduleService
    .findModulesForCourse(params.courseId)
    .then(modules => this.modules = modules).then(()=>{this.lessons = this.lessonService.findLessonsForModule(this.modules, params.moduleId);
    this.params = params})
      );
  }

}
