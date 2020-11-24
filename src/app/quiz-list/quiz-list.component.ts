import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../services/QuizService';
import { Quiz } from '../../constants/types';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css'],
})
export class QuizListComponent implements OnInit {
  quizzes: Quiz[] = [];

  constructor(private router: Router, private service: QuizService) {}

  ngOnInit(): void {
    this.service.fetchAllQuizzes().then((quizzes) => (this.quizzes = quizzes));
  }

  selectQuiz = (quizId: string) => {
    this.router.navigate([`/quiz/${quizId}`]);
  };
}
