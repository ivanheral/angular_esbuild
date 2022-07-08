import { Component } from "@angular/core";
import { ControlComponent } from "utils/ControlComponent";

@Component({
  selector: "app-textarea",
  templateUrl: "./textarea.component.html",
  styleUrls: ["./textarea.component.css"],
})
export class TextareaComponent extends ControlComponent {
  constructor() {
    super();
  }
}
