import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ModuleSelectionComponent } from './module-selection/module-selection.component';
import { TransactionTypeSelectionComponent } from './transaction-type-selection/transaction-type-selection.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { ExecuteCompositionSelectionComponent } from './execute-composition-selection/execute-composition-selection.component';
import { ConfirmCompositionSelectionComponent } from './confirm-composition-selection/confirm-composition-selection.component';
import { ModulePathComponent } from './module-path/module-path.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModuleSelectionComponent,
    TransactionTypeSelectionComponent,
    CreateTransactionComponent,
    ExecuteCompositionSelectionComponent,
    ConfirmCompositionSelectionComponent,
    ModulePathComponent,
    DetailInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
