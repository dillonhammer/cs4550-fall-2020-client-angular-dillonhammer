export interface Course {
  _id: string;
  title: string;
  owner: string;
  lastUpdated: string;
  _nuid: string;
  _domain: string;
  _createdAt: string;
  _updatedAt: string;
  __v: string;
}

export interface Module {
  _id: string;
  title: string;
  _nuid: string;
  _courses: string;
  _domain: string;
  _createdAt: string;
  _updatedAt: string;
  __v: string;
  editing: boolean;
}

export interface Lesson {
  _id: string;
  title: string;
  _nuid: string;
  _modules: string;
  _domain: string;
  _createdAt: string;
  _updatedAt: string;
  __v: string;
  editing: boolean;
}

export interface Quiz {
  _id: string;
  title: string;
}

export interface Question {
  _id: string;
  title: string;
  quizId: string;
  question: string;
  correct: string;
  answer: string;
  type: 'TRUE_FALSE' | 'MULTIPLE_CHOICE';
  choices: string[];
}

export interface Attempt {
  _id: string;
  score: number;
}
