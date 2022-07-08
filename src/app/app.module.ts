import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { ExamplesComponent } from "pages/examples/examples.component";
// utils
import { BaseComponent } from "utils/BaseComponent";
import { AppInjector } from "utils/Injector";
// services
import { GenericService } from "services/generic/generic.service";
import { StorageService } from "services/storage/storage.service";
import { GuardService } from "services/guard/guard.service";
import { FormService } from "services/form/form.service";
import { MenuComponent } from "components/menu/menu.component";
import { SharedModule } from "modules/shared/shared.module";

@NgModule({
  declarations: [AppComponent, BaseComponent, ExamplesComponent, MenuComponent],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule, SharedModule],
  providers: [
    FormService,
    GenericService,
    GuardService,
    HttpClient,
    StorageService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  static InjectorInstance: Injector;

  constructor(injector: Injector) {
    AppInjector.setInjector(injector);
  }
}
