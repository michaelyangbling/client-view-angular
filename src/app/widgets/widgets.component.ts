import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {LessonService} from "../services/LessonService";
import {ModuleService} from "../services/ModuleService";
import {TopicService} from "../services/TopicService";
import {WidgetService} from "../services/WidgetService";

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})

// @Pipe({
//   name:"split"
// })
// export class SplitPipe implements PipeTransform {
//   transform(value) {
//       return value.split('\n');
//   }
// }

export class WidgetsComponent implements OnInit {


  constructor(private lessonService: LessonService, private moduleService: ModuleService,
    private topicService: TopicService, private widgetService: WidgetService,
    private activatedRoute: ActivatedRoute, 
    private router: Router) { 
  }
  modules= []
  params = undefined
  lessons = []
  topics=[]
  widgets = []


  selectModule = module => {
    // to: /course/:courseId/module/:moduleId/lesson
    this.router.navigate(['course', this.params.courseId, 'module', String(module.id), 'lesson'])
  }

  selectLesson = lesson => {
    // to: /course/:courseId/module/:moduleId/lesson/:lessonId/topic
    // console.log(lesson, lesson.id, 'wtf')
    this.router.navigate(['course', this.params.courseId, 'module', this.params.moduleId, 'lesson',
    String(lesson.id), 'topic'])
  }

  selectTopic = topic => {
    // console.log(lesson, lesson.id, 'wtf')
    this.router.navigate(['course', this.params.courseId, 'module', this.params.moduleId, 'lesson',
    this.params.lessonId, 'topic', String(topic.id), 'widget'])
  }

  ngOnInit() {
    // /course/:courseId/module/:moduleId/lesson
    this.activatedRoute.params
      .subscribe(
        params =>{
        this.params = params
        this.moduleService
    .findModulesForCourse(params.courseId)
    .then(modules => this.modules = modules).then(()=>{this.lessons = this.lessonService.findLessonsForModule(this.modules, params.moduleId);
    })
    .then( ()=>{this.topics = this.topicService.findTopicsForLesson(this.lessons, params.lessonId); 
    })
    .then( ()=>{this.widgets = this.widgetService.findWidgetsForTopic(this.topics, params.topicId); 
    } )
  }
      );
  }

}

