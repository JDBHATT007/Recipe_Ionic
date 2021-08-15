import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Recepie } from '../recepie.model';
import { RecepiesService } from '../recepies.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.page.html',
  styleUrls: ['./recepie-detail.page.scss'],
})
export class RecepieDetailPage implements OnInit {

  recipe:Recepie;

  constructor(
    private activatedRoute:ActivatedRoute,
    private recipeService:RecepiesService,
    private router:Router,
    private altCtrl:AlertController,
    private actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      if(!param.has('recepieId')){
        this.router.navigate(['/recepies'])
        return;
      }

      const recepieId = param.get('recepieId');
      this.recipe = this.recipeService.getRecepie(recepieId);
    })
  }

  onClick(){
    this.actionSheetController.create({
      header: 'Are you Sure?',
      buttons: [{
        text:'Cancel',
        role:'cancel'
      },{
        text: 'Delete',
        role:'destructive',
        handler: () => {
          this.recipeService.deleteRecipe(this.recipe.id);
          this.router.navigate(['/recepies'])
        }
      }]
    }).then(alertEl => {
          alertEl.present();
    });
}
}
