import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatIconModule, MatListModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {Router, RouterModule, Routes} from "@angular/router";
import {MatMenuModule} from '@angular/material/menu';
import {MDCRipple} from '@material/ripple';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestsComponent } from './tests/tests.component';
import { DefectComponent } from './defect/defect.component';
import { StatsComponent } from './stats/stats.component';
import { InfoComponent } from './info/info.component';
import {CommonModule} from "@angular/common";
import {MatTableModule} from '@angular/material/table';
import { TableTestsComponent } from './table-tests/table-tests.component';

const appRoutes :Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'feedback',
    component: FeedbackComponent
  },
  {
    path:'tests',
    component: TestsComponent
  },
  {
    path:'defect',
    component: DefectComponent
  },
  {
    path:'stats',
    component: StatsComponent
  },
  {
    path:'info',
    component: InfoComponent
  },
  {
    path:'***',
    component: NotFoundComponent
  }];


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    FeedbackComponent,
    LoginComponent,
    NotFoundComponent,
    TestsComponent,
    DefectComponent,
    StatsComponent,
    InfoComponent,
    TableTestsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes),
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
