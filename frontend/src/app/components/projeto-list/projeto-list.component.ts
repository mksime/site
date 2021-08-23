import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/models/projeto';
import { ProjetoService } from 'src/app/services/projeto.service';

@Component({
  selector: 'app-projeto-list',
  templateUrl: './projeto-list.component.html',
  styleUrls: ['./projeto-list.component.css']
})
export class ProjetoListComponent implements OnInit {

  projeto = {} as Projeto;
  projetos: Projeto[];

  constructor(public projetoService: ProjetoService) { }

  ngOnInit(): void {
    this.getProjetos();
  }

  getProjetos(): void {
    this.projetoService.getProjeto().subscribe((projetos: Projeto[]) => {
      this.projetos = projetos;
    });

  }
}
