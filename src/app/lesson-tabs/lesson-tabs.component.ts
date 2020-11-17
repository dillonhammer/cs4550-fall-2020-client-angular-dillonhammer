import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/services/CourseService';
import Lesson from '../../constants/types';
@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css'],
})
export class LessonTabsComponent implements OnInit {
  courseId: string = '';
  moduleId: string = '';
  lessons: Lesson[] = [];
  lessonId: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CourseService
  ) {
    activatedRoute.url.subscribe((url) => {
      if (this.moduleId) this.refreshLessons(this.moduleId);
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (typeof params.courseId !== 'undefined') {
        this.courseId = params.courseId;
      }
      if (typeof params.moduleId !== 'undefined') {
        this.moduleId = params.moduleId;
      }
      if (typeof params.lessonId !== 'undefined') {
        this.lessonId = params.lessonId;
      }
    });

    if (this.moduleId) this.refreshLessons(this.moduleId);
  }

  refreshLessons = (moduleId: string) => {
    this.service
      .fetchLessonsForModule(moduleId)
      .then((lessons) => (this.lessons = lessons));
  };
}
