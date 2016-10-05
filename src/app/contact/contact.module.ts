import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';
import { SharedModule } from '../shared/shared.module';
import { routing } from './contact.routing';

/**This is a feature module */
@NgModule({
  /**Feature modules and lazy loaded modules should import CommonModule. They need the common directives */
  imports: [CommonModule, FormsModule, SharedModule, routing],
  /**AwesomePipe and HighlightDirective are hidden from the rest of the application */
  declarations: [ContactComponent],
  providers: [ContactService]
})
export class ContactModule { }