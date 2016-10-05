import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'contact', pathMatch: 'full' },
    /**A lazy loaded module location is a string, not a type.*/
    /**In this app, the string identifies both the module file and the module class, the latter separated from the former by a # */
    { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
    { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
];

/**This routing object is intended for the app root module only. */
/**It should never be called RouterModule.forRoot in a feature module. */
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);