import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './books/book-list/book-list.component';
import { CalculatorComponent } from './shared/calculator/calculator.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'books',
    component: BookListComponent,
  },
  {
    path: 'books/:isbn',
    component: BookDetailComponent,
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'calc',
    component: CalculatorComponent,
  },
  {
    path: '**',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
