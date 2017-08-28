import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyClipboardTwoComponent } from './copy-clipboard-two.component';

describe('CopyClipboardTwoComponent', () => {
  let component: CopyClipboardTwoComponent;
  let fixture: ComponentFixture<CopyClipboardTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyClipboardTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyClipboardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
