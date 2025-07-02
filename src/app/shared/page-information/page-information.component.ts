import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { UIService } from 'src/app/_utility-services/ui.service';

@Component({
  selector: 'app-page-information',
  standalone: true,
  imports: [CommonModule,
            MatListModule],
  templateUrl: './page-information.component.html',
  styleUrls: ['./page-information.component.scss']
})
export class PageInformationComponent implements OnInit {

  constructor(private uiService: UIService) {
    
    
  }
  ngOnInit(){
    this.uiService.setCurrentPageName('App Information');
  }
}
