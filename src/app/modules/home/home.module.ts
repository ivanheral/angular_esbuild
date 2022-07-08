import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ExampleRoutingModule } from "./home-routing.module";
import { TestComponent } from "pages/test/test.component";
import { SharedModule } from "modules/shared/shared.module";

@NgModule({
  imports: [CommonModule, ExampleRoutingModule, SharedModule],
  declarations: [TestComponent],
})
export class ExampleModule {}
