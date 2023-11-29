import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'table', component: TableComponent },
];
