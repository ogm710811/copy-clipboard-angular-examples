import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ng2-clipboard/ng2-clipboard';

@Component({
  selector: 'app-copy-clipboard-three',
  templateUrl: './copy-clipboard-three.component.html',
  styleUrls: ['./copy-clipboard-three.component.css']
})
export class CopyClipboardThreeComponent implements OnInit {
  someText: string = `this is some nicely formatted text`;

  constructor(
    private clipboard: ClipboardService
  ) { }

  ngOnInit() {
  }

  // copyToClipboard = () => { this.clipboard.copy(this.someText); }

  copyToClipboard() {
    this.clipboard.copy(this.someText);
  }

}
