import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './title.component';
import { ContactComponent } from './contact/contact.component';

import { HighlightDirective } from './highlight.directive';
import { HighlightDirective as ContactHighlightDirective } from './contact/highlight.directive';

import { AwesomePipe } from './contact/awesome.pipe';

import { ContactService } from './contact/contact.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent,

    AwesomePipe,
    ContactComponent,
    ContactHighlightDirective
  ],
  imports: [BrowserModule, FormsModule],
  providers: [ContactService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
