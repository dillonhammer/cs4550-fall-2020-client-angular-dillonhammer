import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseTableComponent } from './course-table/course-table.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';

const routes: Routes = [
  { path: '', component: CourseTableComponent },
  { path: 'courses', component: CourseTableComponent },
  { path: 'courses/:courseId/modules', component: CourseViewerComponent },
  {
    path: 'courses/:courseId/modules/:moduleId/lessons',
    component: CourseViewerComponent,
  },
  {
    path: 'courses/:courseId/modules/:moduleId/lessons/:lessonId/topics',
    component: CourseViewerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
