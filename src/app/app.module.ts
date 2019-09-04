import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { AuthGuard } from './authgaurd/auth.guard';
import { DataService } from './services/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmationModalComponent } from './shared/confirmation-modal/confirmation-modal.component';
import { HorseFormModalComponent } from './shared/horse-form-modal/horse-form-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationModalComponent,
    HorseFormModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot()
  ],
  providers: [
    DataService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmationModalComponent,
    HorseFormModalComponent
  ]
})
export class AppModule { }
