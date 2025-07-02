import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { UIService } from 'src/app/_utility-services/ui.service';

@Component({
  selector: 'app-profile-manager',
  templateUrl: './profile-manager.component.html',
  styleUrls: ['./profile-manager.component.scss']
})
export class ProfileManagerComponent implements OnInit {
  myform: FormGroup | undefined; // Initialize the form group


  constructor(private uiService: UIService,private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.uiService.setCurrentPageName('profile manager');
    this.myform = this.formBuilder.group({
      name: ['', Validators.required],
      matricule: ['', Validators.required],
      description: ['', Validators.required],
      stations: this.formBuilder.array([
        this.formBuilder.group({
          stationid: ['', Validators.required],
          level: ['', Validators.required]
        })
      ])
    });
    
  }


  addStation(): void {
    const stationFG = this.formBuilder.group({
      stationid: ['', Validators.required],
      level: ['', Validators.required]
    });
    if (this.myform?.get('stations')) {
      (this.myform.get('stations') as FormArray).push(stationFG);
    }
  }

  removeStation(index: number): void {
    if (this.myform?.get('stations')) {
      (this.myform.get('stations') as FormArray).removeAt(index);
    }
  }

  get stations(): FormArray {
    return this.myform?.get('stations') as FormArray;
  }

  onSubmit(): void {
    console.log(this.myform?.value);
    // Send request to maken db
  }
}