import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ModuleSelectionComponent } from './components/module-selection/module-selection.component';
import { TransactionTypeSelectionComponent } from './components/transaction-type-selection/transaction-type-selection.component';
import { CreateTransactionComponent } from './components/create-transaction/create-transaction.component';
import { CompositionSelectionComponent } from './components/composition-selection/composition-selection.component';
import { ModulePathComponent } from './components/module-path/module-path.component';
import { DetailInfoComponent } from './components/detail-info/detail-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModuleSelectionComponent,
    TransactionTypeSelectionComponent,
    CreateTransactionComponent,
    CompositionSelectionComponent,
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
