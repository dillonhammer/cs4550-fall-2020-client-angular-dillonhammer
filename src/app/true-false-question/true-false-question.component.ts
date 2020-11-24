import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/constants/types';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css'],
})
export class TrueFalseQuestionComponent implements OnInit {
  @Input()
  question: Question = {
    _id: '',
    title: '',
    quizId: '',
    question: '',
    correct: '',
    type: 'TRUE_FALSE',
    choices: [],
  };
  studentAnswer = '';
  grading = false;

  ngOnInit(): void {}

  grade = () => {
    if (this.studentAnswer) {
      this.grading = true;
    }
  };
}
