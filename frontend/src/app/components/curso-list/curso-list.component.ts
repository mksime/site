import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  curso = {} as Curso;
  cursos: Curso[];

  constructor(public cursoService: CursosService) { }

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos(): void {
    this.cursoService.getCurso().subscribe((cursos: Curso[]) => {
      this.cursos = cursos;
    });
    
  }
}
