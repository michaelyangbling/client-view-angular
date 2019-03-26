import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
const appRoutes: Routes = [
   { path: 'course', component: CourseComponent }
];
export const routing = RouterModule.forRoot(appRoutes);