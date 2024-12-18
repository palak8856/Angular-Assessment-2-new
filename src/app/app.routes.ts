import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { AddRecordComponent } from './records/add-record/add-record.component';
import { ViewRecordsComponent } from './records/view-records/view-records.component';
import { EditRecordsComponent } from './records/edit-records/edit-records.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: '',
        canActivate: [authGuard],
        component: HomeComponent,
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./records/record-list/record-list.component').then(
                (m) => m.RecordListComponent
              ),
          },
          {
            path: 'my-books',
            loadComponent: () =>
              import('./records/my-records/my-records.component').then(
                (M) => M.MyRecordsComponent
              ),
          },
          {
            path: 'add',
            component: AddRecordComponent,
            canActivate: [authGuard],
            data: {
              role: 'Admin',
            },
          },
          {
            path: 'view/:name',
            component: ViewRecordsComponent,
          },
          {
            path: 'edit/:name',
            component: EditRecordsComponent,
            canActivate: [authGuard],
            data: {
              role: 'Admin',
            },
          },
        ],
      },
];
