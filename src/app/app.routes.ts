import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { useAnimation } from '@angular/animations';
import { ProductComponent } from './pages/product/product.component';
import { DocsComponent } from './pages/docs/docs.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'product/:{id}', component: ProductComponent },
    { path: 'doc', component: DocsComponent },
    { path: 'contact', component: ContactComponent },
    { path: "**", redirectTo:"" }

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash:true})] ,
    exports: [RouterModule]
})
export class RoutingModule {}
