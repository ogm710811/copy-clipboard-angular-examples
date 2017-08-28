import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyClipboardThreeComponent } from './copy-clipboard-three.component';

describe('CopyClipboardThreeComponent', () => {
  let component: CopyClipboardThreeComponent;
  let fixture: ComponentFixture<CopyClipboardThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyClipboardThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyClipboardThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
