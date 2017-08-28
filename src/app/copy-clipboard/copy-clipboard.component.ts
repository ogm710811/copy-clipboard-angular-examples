import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copy-clipboard',
  templateUrl: './copy-clipboard.component.html',
  styleUrls: ['./copy-clipboard.component.css']
})
export class CopyClipboardComponent implements OnInit {
  isCopied1: boolean = false;
  isCopied2: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
