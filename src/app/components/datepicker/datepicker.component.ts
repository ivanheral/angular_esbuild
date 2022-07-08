import { Component, Input, OnInit } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";
import { FieldTemplate } from "interfaces/FieldTemplate";
import { ThemeTemplate } from "interfaces/ThemeTemplate";

@Component({
  selector: "app-datepicker",
  templateUrl: "./datepicker.component.html",
  styleUrls: ["./datepicker.component.css"],
})
export class DatepickerComponent implements OnInit {
  @Input()
  form!: FieldTemplate;
  @Input()
  theme: ThemeTemplate | undefined;
  @Input() group: FormGroup = new FormGroup({});
  day = "";
  month = "";
  year = "";
  set Group(group: FormGroup) {
    this.group = group || new FormGroup({});
  }

  public c!: AbstractControl | undefined;

  updateday(ev: string): void {
    this.day = ev;
    this.setValue();
  }

  updatemonth(ev: string): void {
    this.month = ev;
    this.setValue();
  }

  updateyear(ev: string): void {
    this.year = ev;
    this.setValue();
  }

  setValue(): void {
    this.c?.setValue(`${this.day}/${this.month}/${this.year}`);
    this.c?.updateValueAndValidity();
    this.c?.markAsTouched();
  }

  ngOnInit(): void {
    this.c = this.form?.control
      ? this.group?.controls[this.form?.control]
      : undefined;

    this.c?.valueChanges.subscribe((value) => {
      if (this.c?.value && value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)) {
        const m = value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
        this.day = m?.[1];
        this.month = m?.[2];
        this.year = m?.[3];
      }
    });
  }
}
