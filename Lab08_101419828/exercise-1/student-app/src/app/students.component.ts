import { Component } from '@angular/core';

@Component({
  selector: 'students',
  standalone: true,
  template: `
    <h1>{{ getTitle() }}</h1>
    <p>Today's Date: {{ getCurrentDate() }}</p>
  `
})
export class StudentsComponent {
  title: string = 'Welcome to Students Component!';

  getTitle(): string {
    return this.title;
  }

  getCurrentDate(): string {
    const now = new Date();
    return `${now.toDateString()} - ${now.toLocaleTimeString()}`;
  }
}
