import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/constants/types';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css'],
})
export class MultipleChoiceQuestionComponent implements OnInit {
  @Input()
  question: Question = {
    _id: '',
    title: '',
    quizId: '',
    question: '',
    answer: '',
    correct: '',
    type: 'MULTIPLE_CHOICE',
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
