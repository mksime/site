import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  navLinks: any[];
  activeLinkIndex = -1;
  // log_label: string; //= 'Log in';
  // log_link: string;// = './login';
  private _login: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    ) {
    this.navLinks = [
        {
            label: 'Sobre',
            link: './about',
            index: 0
        }, 
        // {
        //     label: 'Blog',
        //     link: './posts',
        //     index: 1
        // }, 
        {
            label: 'Projetos',
            link: './projetos',
            index: 2
        }, {
            label: 'Cursos',
            link: '/cursos',
           index: 3
        },
    ];
  }

  // get logged(): boolean {
  //   return this._login;
  // }

  // set logged(value: boolean) {
  //   this._login = value;
  //   this.navLinks = [
  //     {
  //         label: 'Sobre',
  //         link: './about',
  //         index: 0
  //     }, {
  //         label: 'Blog',
  //         link: './posts',
  //         index: 1
  //     }, {
  //         label: 'Projetos',
  //         link: './projects',
  //         index: 2
  //     }, {
  //         label: value ? 'Log out' : 'Log in',
  //         link: value ? './logout' : './login',
  //         index: 3
  //     },
  //   ];
  // }

  ngOnInit(): void {

  //   if (this.authService.isLoggedIn()) {
  //     console.log('logado');
  //     this.log_label = 'Log out';
  //     this.log_link = './logout';
  //   } else {
  //     console.log('deslogado');
  //     this.log_label = 'Log in';
  //     this.log_link = './login';
  //   }
  //   console.log(this.log_label, this.log_link);
    

    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });

  }

  logout() {
    var result = this.authService.logout()
  }
}