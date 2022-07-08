import { Component } from "@angular/core";
import { ControlComponent } from "utils/ControlComponent";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.css"],
})
export class SelectComponent extends ControlComponent {
  constructor() {
    super();
  }
}
