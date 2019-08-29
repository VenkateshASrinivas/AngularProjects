import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';

const appRoutes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);