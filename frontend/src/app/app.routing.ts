import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupermercadoComponent } from './components/supermercado/supermercado.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    {path: 'supermercados', component: SupermercadoComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
