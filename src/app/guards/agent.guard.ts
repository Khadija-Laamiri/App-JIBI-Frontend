// agent.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AgentGuard implements CanActivate {

  constructor(private authService: AuthenticationService , private router: Router) {}

  // @ts-ignore
  canActivate(): boolean {
    /*if (this.authService.isAgent()) {
      return true;
    } else {
      this.router.navigate(['/login']); // Redirigez vers la page de connexion si l'utilisateur n'est pas un agent
      return false;
    }*/
  }
}
