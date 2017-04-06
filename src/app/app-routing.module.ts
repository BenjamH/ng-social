import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const appRoutes: Routes = [];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class AppRoutingModule {}
