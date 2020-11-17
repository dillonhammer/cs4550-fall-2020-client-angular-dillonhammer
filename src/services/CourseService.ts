import { Injectable } from '@angular/core';
import Course from '../constants/types';

const url =
  'https://wbdv-generic-server.herokuapp.com/api/dillonhammer/courses';

@Injectable()
export class CourseService {
  fetchAllCourses = () => fetch(url).then((response) => response.json());
  createCourse = () =>
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ title: 'New Course' }),
      headers: {
        'content-type': 'application/json',
      },
    }).then((response) => response.json());
  updateCourse = (course: Course) =>
    fetch(`${url}/${course._id}`, {
      method: 'PUT',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json',
      },
    }).then((response) => response.json());
  deleteCourse = (course: Course) =>
    fetch(`${url}/${course._id}`, {
      method: 'DELETE',
    }).then((response) => response.json());
}
