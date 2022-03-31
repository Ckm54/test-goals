import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.css']
})
export class AddGoalComponent implements OnInit {

  newGoal = new Goal(0, " ", " ", new Date());
  
  constructor() { }

  ngOnInit(): void {
  }

}
