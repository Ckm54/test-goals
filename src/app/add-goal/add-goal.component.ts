import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.css']
})
export class AddGoalComponent implements OnInit {

  newGoal = new Goal(0, " ", " ", new Date());
  @Output() addNewGoal = new EventEmitter<Goal>();

  constructor() { }

  ngOnInit(): void {
  }

  addGoal() {
    this.addNewGoal.emit(this.newGoal);
  }

}
