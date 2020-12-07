import { Component } from '@angular/core';


interface Student {
  id: number;
  name: string;
  grade: number;
  isProjectDone: boolean;
  comment: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  students: Student[] = [
    { id: 1, name: 'Hugo', grade: 12, isProjectDone: false, comment: 'Appliqué, attentif' },
    { id: 2, name: 'Noémie', grade: 18, isProjectDone: true, comment: 'Brillante' },
    { id: 3, name: 'Umberto', grade: 6.5, isProjectDone: false, comment: 'Dissipé, perturbateur' }
  ];

  message: string = '';

  constructor() { }

  onClick(index: number) {
    this.message = this.students[index].comment;
  }

  // calback de la propriété onChange.
  onChange(e: any) {
    // target est une clé ayant pour valeur l'élement écouteur.
    console.log(e.target.checked);
  }

  // Retourne les étudiants ayant terminer leur projet.
  getStudentProjectFinish(){

  }
}
