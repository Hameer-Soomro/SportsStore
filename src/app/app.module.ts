import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './routes/routes';
import { StoreFirstGuard } from './routes/store-first.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
