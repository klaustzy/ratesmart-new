import { Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { CodeVerificationComponent } from './components/code-verification/code-verification.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { PasswordUpdatedComponent } from './components/password-updated/password-updated.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsComponent } from './components/forms/forms.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { SharePageComponent } from './components/share-page/share-page.component';
import { CustomizeComponent } from './components/customize/customize.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { AboutComponent } from './components/about/about.component';
import { SettingsComponent } from './components/settings/settings.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ContactSupportComponent } from './components/contact-support/contact-support.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent }, // Add this route
  { path: 'forgot-password', component: ForgotPasswordComponent }, // Add Forgot Password route here
  { path: 'code-verification', component: CodeVerificationComponent }, // Add Code Verification route here
  { path: 'new-password', component: NewPasswordComponent},
  { path: 'password-updated', component: PasswordUpdatedComponent }, // Add Password Updated route here
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'edit-form/:id', component: EditFormComponent }, // Route for editing a form
  { path: 'share', component: SharePageComponent },
  { path: 'customize', component: CustomizeComponent},
  { path: 'analytics', component: AnalyticsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'edit-profile', component: EditProfileComponent},
  { path: 'contact-support', component: ContactSupportComponent},
  { path: '**', redirectTo: '' }, // Fallback to the landing page
];
