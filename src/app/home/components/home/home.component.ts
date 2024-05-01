import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Application } from "@nativescript/core";
import { NativeDialogConfig, NativeDialogService } from "@nativescript/angular";
import { DialogComponent } from "../dialog/dialog.component";

@Component({
  selector: "Home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  constructor(
    private nativeDialog: NativeDialogService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {}

  openDialog() {
    const options: NativeDialogConfig = {
      viewContainerRef: this.viewContainerRef,
      nativeOptions: {
        animated: true,
      },
    };

    let dialogRef = this.nativeDialog.open(DialogComponent, options);

    dialogRef.afterClosed().subscribe((result) => {
      // console.log(result);
    });
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }
}
