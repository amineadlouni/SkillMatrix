import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/_utility-services/ui.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  appName: string = ''
  appDesc: string = ''
  isOpened:boolean = false;
  constructor(private uiService: UIService) {
    
  }
  ngOnInit(): void {
    this.subscribeToSidenavChange()
    this.appName = environment.appName;
    this.appDesc = environment.appDesc;
  }
  subscribeToSidenavChange() {
    this.uiService.toolbarStateChanged.subscribe(x=> this.isOpened = !this.isOpened)
  }


}
