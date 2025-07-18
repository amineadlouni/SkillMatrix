import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'application',
    loadChildren:()=>
    import('./app-content/app-content.module')
      .then(m=>m.AppContentModule)
  },
  { path: '**', 
    component: PageNotFoundComponent 
  }, 
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
