import { Injectable } from '@angular/core';

const url = 'http://localhost:3000/api';

@Injectable()
export class QuizService {
  fetchAllQuizzes = () =>
    fetch(`${url}/quizzes`).then((response) => response.json());
  fetchQuizById = (quizId: string) =>
    fetch(`${url}/quizzes/${quizId}`).then((response) => response.json());
  fetchQuizQuestions = (quizId: string) =>
    fetch(`${url}/quizzes/${quizId}/questions`).then((response) =>
      response.json()
    );
  fetchQuizAttempts = (quizId: string) =>
    fetch(`${url}/quizzes/${quizId}/attempts`).then((response) =>
      response.json()
    );
}
