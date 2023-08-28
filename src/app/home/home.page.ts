import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
//import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  toDoList =[
    {
    itemName : 'Coding',
    itemDueDate: '10-10-23',
    itemPriority: 'high',
    itemCategory: 'Work'
    },
    {
    itemName : 'Design',
    itemDueDate: '10-12-23',
    itemPriority: 'low',
    itemCategory: 'Work'
    },
    {
    itemName : 'Shopping',
    itemDueDate: '10-14-23',
    itemPriority: 'middle',
    itemCategory: 'Personal'
    },
    {
      itemName : 'Workout',
      itemDueDate: '10-16-23',
      itemPriority: 'high',
      itemCategory: 'Personal'
      },


]
  today: number = Date.now()

  constructor(public modalCtrl:ModalController) {}

  // async addTask(){
  //   const modal = await this.modalCtrl.create({
  //     component:AddNewTaskPage
  //   })
  //   return await modal.present()

  // }
}
