import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Optional,
  ViewChild,
} from "@angular/core";
import { NATIVE_DIALOG_DATA, NativeDialogRef } from "@nativescript/angular";
@Component({
  selector: "dialog",
  templateUrl: "./dialog.component.html",
  styleUrl: "./dialog.component.scss",
})
export class DialogComponent implements OnInit, AfterViewInit {
  @ViewChild("scrollView") scrollView: ElementRef;
  constructor(
    @Inject(NATIVE_DIALOG_DATA) public data,
    @Optional() private ref: NativeDialogRef<DialogComponent>
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.scrollView.nativeElement.parent.style.backgroundColor = "#f23";
    console.log(this.scrollView.nativeElement.parent);
  }

  closeDialog() {
    this.ref.close();
  }
}
