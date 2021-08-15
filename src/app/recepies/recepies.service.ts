import { Injectable } from '@angular/core';
import { Recepie } from './recepie.model';

@Injectable({
  providedIn: 'root'
})
export class RecepiesService {

  private recepies:Recepie[] = [
    {
      id: "r1",
      title: "Meggie",
      imageUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/syw8yg1kifpef95l2jse",
      ingredients: ["Water","Pack of Meggie","Spices","Vegetables"]
    },
    {
      id: "r2",
      title: "Passta",
      imageUrl: "https://www.foodiecrush.com/wp-content/uploads/2020/05/Penne-Marinara-Sauce-foodiecrush.com-004.jpg",
      ingredients: ["Water","Pack of Passta","Spices","Vegetables"]
    }
  ]

  constructor() { }

  getAllRecepie(){
    return [...this.recepies];
  }

  getRecepie(recepieId: string){
    return {...this.recepies.find(recepie => {
      return recepie.id === recepieId
    })}
  }

  deleteRecipe(recepieId: string){
    this.recepies = this.recepies.filter(recipe => {
      return recipe.id !== recepieId;
    });
  }
}
