import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* App Root */
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';
/* Feature Modules */
import { ContactModule } from './contact/contact.module';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    ContactModule,
    routing
  ],
  providers: [UserService],
  declarations: [AppComponent, HighlightDirective, TitleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }