import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { AuthGuard } from './services/auth.service';
import { LogoutComponent } from './components/logout/logout.component';
import { CursoListComponent } from './components/curso-list/curso-list.component';
import { ProjetoListComponent } from './components/projeto-list/projeto-list.component';
import { CursoDetailComponent } from './components/curso-detail/curso-detail.component';
import { ProjetoDetailComponent } from './components/projeto-detail/projeto-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'cursos', component: CursoListComponent },
  { path: 'curso/:id', component: CursoListComponent },
  { path: 'projetos', component: ProjetoListComponent },
  { path: 'projeto/:id', component: ProjetoDetailComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id', component: PostDetailComponent },
  // { path: 'addposts', component: AddPostComponent },
  { path: 'addposts', component: AddPostComponent, canActivate:[AuthGuard] },
  { path: 'about', component: AboutComponent },  
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
