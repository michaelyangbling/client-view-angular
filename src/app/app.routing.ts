import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { ModulesComponent } from './modules/modules.component';
import { LessonsComponent } from './lessons/lessons.component';
import { TopicsComponent } from './topics/topics.component';
import { WidgetsComponent } from './widgets/widgets.component';



const appRoutes: Routes = [
   { path: 'course', component: CourseComponent },
   { path: 'course/:courseId/module', component: ModulesComponent, pathMatch: 'full' },
   { path: 'course/:courseId/module/:moduleId/lesson', component: LessonsComponent, pathMatch: 'full' },
   { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic', component: TopicsComponent, pathMatch: 'full' },
   { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget', component: WidgetsComponent, pathMatch: 'full' },
];
export const routing = RouterModule.forRoot(appRoutes);