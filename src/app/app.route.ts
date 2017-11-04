import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "./shared/components/login/login.component";
import { SignupComponent } from "./shared/components/signup/signup.component";
import { PlansComponent } from "./shared/components/plans/plans.component";
import{Role1Component} from "./main/role1/role1.component";
import{Role2Component} from"./main/role2/role2.component";
export const routes: Routes = [
    { path: '', redirectTo:"login",pathMatch:"full" },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'plans', component: PlansComponent },
    {path:'role1',component:Role1Component},
    {path:'role2',component:Role2Component}
]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);