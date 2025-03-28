import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentComponent } from './student/student.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: StudentsComponent },
      { path: 'student', component: StudentComponent }
    ])
  ]
};
