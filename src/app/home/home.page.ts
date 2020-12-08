import { EtudiantService } from './../Service/etudiant.service';
import { Student } from './../Interface/student.interface';
import { TestComponent } from './../components/test/test.component';
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  // students: Student[] = [
  //   { id: 1, name: 'Hugo', grade: 12, isProjectDone: false, comment: 'Appliqué, attentif' },
  //   { id: 2, name: 'Noémie', grade: 18, isProjectDone: true, comment: 'Brillante' },
  //   { id: 3, name: 'Umberto', grade: 6.5, isProjectDone: false, comment: 'Dissipé, perturbateur' }
  // ];

  students: Student[] | null = null;
  numFastStudent: number;
  message: string = '';

  constructor(private popoverCtrl: PopoverController, private etudiantService: EtudiantService) {
    this.etudiantService
      .findAll().subscribe(
        students => {
          this.students = students;
          this.numFastStudent = this.getStudentProjectFinish().length;
        });
  }

  onClick(index: number) {
    this.message = this.students[index].comment;
  }

  // calback de la propriété onChange.
  onChange(e: any, index: number) {
    // target est une clé ayant pour valeur l'élement écouteur.
    // console.log(e.target.checked);

    // MAJ de la liste de données.
    let checked = e.target.checked;
    this.students[index].isProjectDone = checked;
    console.log(this.students);
  }

  async testPopover() {
    let popover = await this.popoverCtrl.create({
      component: TestComponent,
      translucent: false
    });
    await popover.present();
  }

  // Retourne les étudiants ayant terminer leur projet.
  private getStudentProjectFinish(): Student[] {
    // le filter permet de push un étudiant dans le tableau les étudiants dont la propriété isProjectDone === true.
    return this.students.filter(student => student.isProjectDone === true);
  }
}
