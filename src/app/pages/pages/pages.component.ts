import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Buttons',
      redirectTo: '/buttons'
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checks',
      redirectTo: '/checkbox'
    },
    {
      icon: 'calendar-outline',
      name: 'Datetime',
      redirectTo: '/date-time'
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirectTo: '/fab'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
