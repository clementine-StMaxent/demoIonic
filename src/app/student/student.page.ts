import { EtudiantService } from './../Service/etudiant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  name: string = 'Appareil';



  constructor(private etudiantService: EtudiantService, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  findall() {
  }

  findById() {
  }
}
