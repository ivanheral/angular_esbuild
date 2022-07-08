import { Component, Input } from "@angular/core";
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from "@angular/forms";
import { FieldTemplate } from "interfaces/FieldTemplate";
import { ThemeTemplate } from "interfaces/ThemeTemplate";

@Component({
  selector: "app-multicheckbox",
  templateUrl: "./multicheckbox.component.html",
  styleUrls: ["./multicheckbox.component.css"],
})
export class MulticheckboxComponent {
  @Input()
  form!: FieldTemplate;
  @Input()
  theme: ThemeTemplate | undefined;
  @Input() group: FormGroup = new FormGroup({});
  set Group(group: FormGroup) {
    this.group = group || new FormGroup({});
  }

  public c!: AbstractControl | undefined;

  checked(value: any): boolean {
    const checkArray: FormArray = this.group?.get(
      this.form?.control
    ) as FormArray;

    return checkArray.value.find((v: any) => {
      if (this.form?.prop) {
        return v[this.form.prop] === value;
      } else {
        return value.includes(v);
      }
    });
  }

  onCheckboxChange(e: any, option: any): void {
    const checkArray: FormArray = this.group?.get(
      this.form?.control
    ) as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(option));
    } else {
      checkArray.removeAt(
        checkArray.value.findIndex((v: string) => v === e.target.value)
      );
    }
  }
}
