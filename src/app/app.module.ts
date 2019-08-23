import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubsComponent } from './features/subs/subs.component';
import { TestComponent } from './features/test/test.component';
import { UsersAbilityComponent } from './features/users-ability/users-ability.component';
import { LandingComponent } from './pages/landing/landing.component';
import { DashComponent } from './pages/dash/dash.component';
import { FormComponent } from './features/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextDirective } from './directives/text.directive';

@NgModule({
  declarations : [
    AppComponent,
    SubsComponent,
    TestComponent,
    UsersAbilityComponent,
    LandingComponent,
    DashComponent,
    FormComponent,
    TextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
