import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/services/QuizService';
import { Question } from '../../constants/types';
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
  }
}
