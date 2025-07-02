import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ApiService } from './api.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationDialogComponent } from './app-content/notification-dialog/notification-dialog.component';
import { firstValueFrom } from 'rxjs';
import { UserProfile } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class LevelAccessGuard implements CanActivate {

  constructor(
    private apiService: ApiService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    // Get the requested level and matricule from the route
    const requestedLevel = +route.paramMap.get('level')!;
    const matricule = +route.paramMap.get('mat')!;

    try {
      // Fetch the operator's profile to get their current level
      const userProfile:UserProfile = await firstValueFrom(this.apiService.GET_Operator_By_ID(matricule));
      const currentLevel = userProfile.currentLevel;

      // Check if the requested level is allowed
      if (requestedLevel <= currentLevel) {
        return true; // Allow access
      } else {
        // Block access and show a notification dialog
        this.dialog.open(NotificationDialogComponent, {
          data: { message: `Please complete level ${currentLevel} before accessing level ${requestedLevel}.` }
        });

        // Redirect to the user profile page
        this.router.navigate(['/application/user-profile', matricule]);
        return false; // Block access
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return false; // Block access if there's an error fetching the profile
    }
  }
}
