import { Component, OnInit } from '@angular/core';
import { PEOPLE, Person } from '../person/person';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  personName: Person;
  people = PEOPLE;

  constructor() {
  }

  addPerson(name) {
    this.people.push({name: name});
  }

  ngOnInit() {
  }

}
