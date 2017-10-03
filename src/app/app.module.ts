import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HomeComponent } from './home/home.component';

import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
<<<<<<< HEAD
//import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { TeacherCourseComponent } from './teacher-course/teacher-course.component';
import { TeacherQuizComponent } from './teacher-quiz/teacher-quiz.component';
//import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';
=======
import { TeacherCourseComponent } from './teacher-course/teacher-course.component';
import { TeacherQuizComponent } from './teacher-quiz/teacher-quiz.component';
import { EditQuestionModalComponent } from './edit-question-modal/edit-question-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> master

import { StudentComponent } from './student/student.component';
import { StudentFeedbackComponent } from './student-feedback/student-feedback.component';
import { StudentEnrolledCoursesComponent } from './student-enrolled-courses/student-enrolled-courses.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    IconsComponent,
    NotificationsComponent,
    HomeComponent,

    TeacherDashboardComponent,
<<<<<<< HEAD
    //MyNewComponentComponent,
    TeacherCourseComponent,
    TeacherQuizComponent,
   // QuizQuestionsComponent,
=======
    TeacherCourseComponent,
    TeacherQuizComponent,
    EditQuestionModalComponent,
>>>>>>> master

    StudentComponent,
    StudentFeedbackComponent,
    StudentEnrolledCoursesComponent,
    StudentCoursesComponent,
    StudentHomeComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
