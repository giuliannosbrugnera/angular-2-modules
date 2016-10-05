import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

/**Always call RouterModule.forChild in a feature module. */
export const routing: ModuleWithProviders = RouterModule.forChild([
    { path: 'contact', component: ContactComponent }
]);
