import { Component } from "@angular/core";
import { ControlComponent } from "utils/ControlComponent";
@Component({
  selector: "app-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.css"],
})
export class CheckboxComponent extends ControlComponent {
  constructor() {
    super();
  }
}
