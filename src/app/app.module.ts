import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/* Feature Modules */
import { ClipboardModule } from 'ngx-clipboard';
import { ClipboardService } from 'ng2-clipboard/ng2-clipboard';

import { AppComponent } from './app.component';
import { CopyClipboardComponent } from './copy-clipboard/copy-clipboard.component';
import { CopyClipboardTwoComponent } from './copy-clipboard-two/copy-clipboard-two.component';
import { CopyClipboardThreeComponent } from './copy-clipboard-three/copy-clipboard-three.component';

@NgModule({
  declarations: [
    AppComponent,
    CopyClipboardComponent,
    CopyClipboardTwoComponent,
    CopyClipboardThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    /* Feature Modules */
    ClipboardModule,

  ],
  providers: [
    ClipboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
