import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GuardService } from "services/guard/guard.service";
import { ExamplesComponent } from "pages/examples/examples.component";
import { HomeComponent } from "pages/home/home.component";

const routes: Routes = [
  {
    path: "examples",
    component: ExamplesComponent,
    canActivate: [GuardService],
  },
  {
    path: "example_module",
    loadChildren: () =>
      import("./modules/home/home.module").then((m) => m.ExampleModule),
  },
  {
    path: "",
    component: HomeComponent,
    canActivate: [GuardService],
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
