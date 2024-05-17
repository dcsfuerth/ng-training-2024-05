import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './books/book-list/book-list.component';
import { CalculatorComponent } from './shared/calculator/calculator.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { bookDetailEnterGuard } from './books/guards/book-detail-enter.guard';
import { calculatorEnterGuard } from './shared/calculator/calculator-enter.guard';

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
    canActivate: [bookDetailEnterGuard],
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'calc',
    component: CalculatorComponent,
    canActivate: [calculatorEnterGuard],
  },
  {
    path: 'a',
    loadChildren: () =>
      import('./modulea/modulea.module').then((m) => m.ModuleaModule),
  },
  {
    path: '**',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false, enableTracing: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
