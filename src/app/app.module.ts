import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CourseService} from "./services/CourseService";
import { routing } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world.component';
import { HelloWorldTwoComponent } from './hello-world-two/hello-world-two.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    HelloWorldComponent, AppComponent, HelloWorldTwoComponent, CourseComponent, HomeComponent
  ],
  imports: [
    routing,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
