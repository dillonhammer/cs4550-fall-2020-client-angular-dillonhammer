import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
    answer: '',
    correct: '',
    type: 'TRUE_FALSE',
    choices: [],
  };
  @Input()
  answer = '';
  @Output()
  answerChange = new EventEmitter<string>();
  submitAnswer = (answer: string) => this.answerChange.emit(answer);

  studentAnswer = '';
  grading = false;

  ngOnInit(): void {}

  grade = () => {
    if (this.studentAnswer) {
      this.grading = true;
    }
  };
}
