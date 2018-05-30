import {Routes, RouterModule} from '@angular/router';
import {GitUsersComponent} from './git-users/git-users.component';

export const appRoutes: Routes = [
    {path: '', component: GitUsersComponent},
    {path: 'git-users', component: GitUsersComponent}
];

// @NOTE you can bootstrap routes like this if you want to enable debugging
// export const routing = RouterModule.forRoot(appRoutes, { enableTracing: true });
export const routing = RouterModule.forRoot(appRoutes);
