import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/CourseService';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../constants/types';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css'],
})
export class CourseTableComponent implements OnInit {
  courses: Course[] = [];
  courseId: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: CourseService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (typeof params.courseId !== 'undefined') {
        this.courseId = params.courseId;
      }
    });

    this.service.fetchAllCourses().then((courses) => (this.courses = courses));
  }

  selectCourse = (courseId: string) => {
    this.router.navigate([`/courses/${courseId}/modules`]);
  };
}
