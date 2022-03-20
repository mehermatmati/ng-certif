import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  @Input()
  public zipCodes : String[];
  @Output()
  public locationEmitter : EventEmitter<String> = new EventEmitter();
  public form: FormGroup;

  constructor() { 
    this.form = new FormGroup({
      zipCode : new FormControl(null ,[Validators.required, Validators.pattern("^([0-9]{5})(?:[-\s]*([0-9]{4}))?$")])
    })
  }

  ngOnInit(): void {
  }

  public onFormSubmit() {
    this.locationEmitter.emit(this.form.value.zipCode);
    this.form.reset();
  }

}
