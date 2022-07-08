import { Component } from "@angular/core";
import { ControlComponent } from "utils/ControlComponent";

@Component({
  selector: "app-radiobutton",
  templateUrl: "./radiobutton.component.html",
  styleUrls: ["./radiobutton.component.css"],
})
export class RadiobuttonComponent extends ControlComponent {
  constructor() {
    super();
  }
}
