import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CourseService} from "./services/CourseService";
import {ModuleService} from "./services/ModuleService";
import {LessonService} from "./services/LessonService";
import {TopicService} from "./services/TopicService";
import {WidgetService} from "./services/WidgetService";



import { routing } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world.component';
import { HelloWorldTwoComponent } from './hello-world-two/hello-world-two.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { ModulesComponent } from './modules/modules.component';
import { LessonsComponent } from './lessons/lessons.component';
import { TopicsComponent } from './topics/topics.component';
import { WidgetsComponent} from './widgets/widgets.component';
@NgModule({
  declarations: [
     HelloWorldComponent, AppComponent, HelloWorldTwoComponent, CourseComponent, HomeComponent, ModulesComponent, LessonsComponent, TopicsComponent, WidgetsComponent
  ],
  imports: [
    routing,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CourseService, ModuleService, LessonService, TopicService, WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
