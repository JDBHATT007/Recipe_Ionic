import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepie.model';
import { RecepiesService } from './recepies.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.page.html',
  styleUrls: ['./recepies.page.scss'],
})
export class RecepiesPage implements OnInit {

recepies:Recepie[];

  constructor(private recepieService:RecepiesService) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.recepies = this.recepieService.getAllRecepie();
  }
}
