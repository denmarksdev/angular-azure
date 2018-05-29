import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



@Injectable()
export class AuthGuard implements CanActivate {


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {

        console.log(state);

        if (this.authService.isAuthenticated()) {
            return true;
        }

        this.router.navigate(['/home']);
        return false;

    }
    constructor(private authService: AuthService, private router : Router )
    {


    }



}