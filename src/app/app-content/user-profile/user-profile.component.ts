import { Component, OnDestroy, OnInit } from '@angular/core';
import { UIService } from 'src/app/_utility-services/ui.service';
import {UserProfile,Level} from 'src/app/interfaces'
import { ActivatedRoute } from '@angular/router';
import { fakeUsers } from 'src/app/fake-data/fake-data';
import { Location } from '@angular/common'
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  operator: UserProfile;
  lvl: number=0;
  Matricule:number;

  constructor(private uiService: UIService,private route: ActivatedRoute,private router: Router,    private location:Location,private apiService: ApiService) 
  {
    this.Matricule =Number(this.route.snapshot.paramMap.get('Matricule'));
    this.operator={
      Name:"test",
      Project:"",
      TeamLeader:"",
      StationName:"",
      id:0,
      Matricule:0,
      completedLevels:[],
      currentLevel:0
    };
    
  }

  ngOnInit(){
    this.uiService.setCurrentPageName('User profile');
    this.loadAllLevelsByOperator();
    console.log("test : ",this.operator.Name);
  }
  goBackToPrevPage(): void {
    this.location.back();
  }
  redirectWithParam(lvl: String) {
    const url = this.router.serializeUrl(this.router.createUrlTree(['../application/level-details'], {
       queryParams: { 
         level : lvl,
         mat: this.operator.Matricule,
         st: this.operator.StationName
       } 
    }));
    window.open(url, '_blank');
  }

  async loadAllLevelsByOperator() {

    try {
      const res = await firstValueFrom(this.apiService.GET_Operator_By_ID(this.Matricule));
      const operatorData = Array.isArray(res) ? res[0] : res; 
      // Assuming res is a single object, not an array
      this.operator = {
        id: operatorData.id,
        Matricule: operatorData.matricule,
        TeamLeader: operatorData.teamLeader,
        Name: operatorData.name,
        StationName: operatorData.currentStation,
        Project: operatorData.project,
        completedLevels: [],  // Initialize empty levels array
        currentLevel: operatorData.currentLevel,      // Default value for currentLevel
      };
  
      const res2 = await firstValueFrom(this.apiService.GET_Levels_By_Operator(this.Matricule));
      this.operator.completedLevels = res2.map((item: any) => {
        // Extracting answers and mapping them to a boolean array
        const answers: boolean[] = [];
        for (let i = 1; i <= 20; i++) {
          answers.push(!!item[`anS${i}`]);  // Convert to boolean using double negation
        }
        console.log(" ----- answers inserted:",answers);
        return {
          ID: item.lvlid,
          title: item.title,
          description: item.description,
          score: item.score,
          questionCount:item.questionCount,
          answers: answers  // Add the answers array
        };
      });
  
      console.log("Operator : ", this.operator,res); // Check levels loaded
  
    } catch (error) {
      console.error('Error loading operator data:', error);
    }
  }
  
}




