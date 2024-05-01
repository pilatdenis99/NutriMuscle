import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/home-page/home-page.routes').then(m => m.HOMEPAGE_ROUTES)}
];
