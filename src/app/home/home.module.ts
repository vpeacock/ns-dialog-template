import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeDialogService,
  NativeScriptCommonModule,
} from "@nativescript/angular";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { DialogComponent } from "./components/dialog/dialog.component";

@NgModule({
  imports: [NativeScriptCommonModule, HomeRoutingModule],
  declarations: [HomeComponent, DialogComponent],
  providers: [NativeDialogService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
