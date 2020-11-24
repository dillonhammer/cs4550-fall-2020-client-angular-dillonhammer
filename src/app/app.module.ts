import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../services/CourseService';
// import {ModuleService} from '../services/module-service';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { CourseTableComponent } from './course-table/course-table.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizService } from 'src/services/QuizService';
import { QuizComponent } from './quiz/quiz.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
// import { ModuleListComponent } from './module-list/module-list.component';
// import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
// import { TopicPilssComponent } from './topic-pilss/topic-pilss.component';
// import { WidgetListComponent } from './widget-list/widget-list.component';

@NgModule({
  declarations: [
    AppComponent,
    // CourseNavigatorComponent,
    CourseViewerComponent,
    CourseTableComponent,
    ModuleListComponent,
    LessonTabsComponent,
    QuizListComponent,
    QuizComponent,
    MultipleChoiceQuestionComponent,
    TrueFalseQuestionComponent,
    // ModuleListComponent,
    // LessonTabsComponent,
    // TopicPilssComponent,
    // WidgetListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    CourseService,
    QuizService,
    // ModuleService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
