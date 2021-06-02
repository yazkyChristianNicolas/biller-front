import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { BudgetsComponent } from './budgets/budgets.component';
import { NewBudgetComponent } from './new-budget/new-budget.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ServicesComponent } from './services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    BudgetsComponent,
    NewBudgetComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatMenuModule,
    MatListModule,
    FormsModule,
    NgbModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [{ provide: "BASE_API_URL", useValue: environment.apiUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
