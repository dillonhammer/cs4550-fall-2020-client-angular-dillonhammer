import { Injectable } from '@angular/core';

const url = 'https://boiling-brook-78204.herokuapp.com/api';

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
