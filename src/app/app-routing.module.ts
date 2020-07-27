import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManifestComponent } from './components/manifest/manifest.component';
import { CoverPageComponent } from './components/cover-page/cover-page.component';

const routes: Routes = [
    {
        path: 'home',
        component: CoverPageComponent
    },
    {
        path: 'admin',
        component: CoverPageComponent,
        children: [
          { path: 'manifest', component: ManifestComponent}
        ]
      },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }