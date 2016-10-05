import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* App Root */
import { AppComponent } from './app.component';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';
/* Feature Modules */
import { ContactModule } from './contact/contact.module';
import { SharedModule } from './shared/shared.module';
import { routing } from './app.routing';

@NgModule({
  imports: [BrowserModule, ContactModule, SharedModule, routing],
  providers: [UserService],
  declarations: [AppComponent, TitleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }