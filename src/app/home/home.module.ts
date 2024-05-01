import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeDialogService,
  NativeScriptCommonModule,
} from "@nativescript/angular";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./components/home/home.component";

@NgModule({
  imports: [NativeScriptCommonModule, HomeRoutingModule],
  declarations: [HomeComponent],
  providers: [NativeDialogService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
