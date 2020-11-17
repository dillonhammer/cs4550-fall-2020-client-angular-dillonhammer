import { Injectable } from '@angular/core';

const url = 'https://wbdv-generic-server.herokuapp.com/api/dillonhammer';

@Injectable()
export class CourseService {
  fetchAllCourses = () =>
    fetch(`${url}/courses`).then((response) => response.json());
  fetchModulesForCourse = (courseId: string) =>
    fetch(`${url}/courses/${courseId}/modules`).then((response) =>
      response.json()
    );
  fetchLessonsForModule = (moduleId: string) =>
    fetch(`${url}/modules/${moduleId}/lessons`).then((response) =>
      response.json()
    );
}
