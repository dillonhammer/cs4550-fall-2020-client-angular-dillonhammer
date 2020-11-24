import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/services/CourseService';
import { Module } from '../../constants/types';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css'],
})
export class ModuleListComponent implements OnInit {
  courseId: string = '';
  modules: Module[] = [];
  moduleId: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: CourseService
  ) {
    activatedRoute.url.subscribe((url) => {
      if (this.courseId) this.refreshModules(this.courseId);
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
    });

    this.refreshModules(this.courseId);
  }

  selectModule = (moduleId: string): void => {
    this.router.navigate([
      `/courses/${this.courseId}/modules/${moduleId}/lessons`,
    ]);
  };

  refreshModules = (courseId: string) => {
    this.service
      .fetchModulesForCourse(courseId)
      .then((modules) => (this.modules = modules));
  };
}
