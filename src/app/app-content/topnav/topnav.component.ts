/*
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UIService } from 'src/app/_utility-services/ui.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  componentName: string = '';
  prevComponentName: string = '';
  constructor(private uiService: UIService,
              private router: Router) {
    
    
  }
  ngOnInit() {
    this.getComponentName()
  }
  
   async getComponentName() {
    this.uiService.currentPageNameChanged.subscribe(x=> this.componentName = x)
    
  }

  changeSidenavState(){
    this.uiService.changeToolbarState();
  }
  logOut(){
    this.router.navigate(['login'])
  }
}
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UIService } from '../../_utility-services/ui.service';
import { FormGroup, FormControl, Validators , FormArray, FormBuilder} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  componentName = '';
  prevComponentName = '';
  searchForm: FormGroup = new FormGroup({
    matricule: new FormControl('', Validators.required)
  });
  searchError='';

  constructor(private uiService: UIService, private router: Router,private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.getComponentName();
    this.searchForm = this.formBuilder.group({
      matricule: ['', [Validators.required]]
    });
  }

  async getComponentName() {
    this.uiService.currentPageNameChanged.subscribe((x: string) => {this.componentName = x; 
      console.log(x);
    });
  }

  changeSidenavState(){
    this.uiService.changeToolbarState();
  }
  logOut(){
    this.router.navigate(['login'])
  }

  searchUser(): void {
    if (this.searchForm.valid) {
      //const matricule = this.searchForm.get('matricule').value;
      // Call API to search for user by matricule
      // If user found, redirect to user profile page
      // If not, display error message with option to create new user
    }
  }
}
