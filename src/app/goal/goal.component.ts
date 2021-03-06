import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  constructor(private datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  goals:Goal[] = [
    new Goal(1, "Watch finding Nemo", "Find an online version and watch merlin fing his son", new Date(2020, 3, 14)),
    new Goal(2, "Buy Cookies", "I have to buy cookies for the parrot", new Date(2019, 6, 9)),
    new Goal(3, "Get a New Phone Case", "Diana has her birthday coming soon!", new Date(2022, 7, 12)),
    new Goal(4, "Get Dog Food", "Puppy likes some expensive tasty food", new Date(2019, 0, 18)),
    new Goal(5, "Finish up creating application ui", "Damn another application!", new Date(2019, 2, 14)),
    new Goal(6, "plot my world domination plan", "Because i am an evil overload!!!", new Date(2022, 3, 14)),
  ]

  toggleDetails(index: number) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete: boolean, index: number) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      if (toDelete) {
        this.goals.splice(index, 1)
      }
    }
  }

  addGoal(goal: any) {
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    const inputDate = new Date(goal.completeDate);
    goal.completeDate = this.datepipe.transform(inputDate, "yyyy-MM-dd")
    this.goals.push(goal);
  }

}
