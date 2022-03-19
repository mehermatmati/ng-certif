import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  public locationForm : FormGroup;

  constructor() { 
    this.locationForm = new FormGroup({
      zipCode = new FormControl()
    })
  }

  ngOnInit(): void {
  }

}
