import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/services/QuizService';
import { Attempt, Question } from '../../constants/types';
import { Quiz } from '../../constants/types';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];
  quizId: string = '';
  quiz: Quiz = { _id: '-1', title: 'Loading...' };
  attempts: Attempt[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: QuizService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.quizId = params.quizId;
    });

    this.service
      .fetchQuizQuestions(this.quizId)
      .then((questions) => (this.questions = questions));
    this.service.fetchQuizById(this.quizId).then((quiz) => (this.quiz = quiz));

    this.service
      .fetchQuizAttempts(this.quizId)
      .then((attempts) => (this.attempts = attempts));
  }

  changeAnswer = (newAnswer: string, questionId: string) => {
    const question = this.questions.find((q) => q._id === questionId);
    if (question) question.answer = newAnswer;
  };

  submitQuiz = () => {
    fetch(
      `https://boiling-brook-78204.herokuapp.com/api/quizzes/${this.quizId}/attempts`,
      {
        method: 'POST',
        body: JSON.stringify(this.questions),
        headers: {
          'content-type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.service
          .fetchQuizAttempts(this.quizId)
          .then((attempts) => (this.attempts = attempts));
      });
  };
}
