import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from "@angular/core";
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from "@angular/forms";
import { FieldTemplate } from "interfaces/FieldTemplate";
import { ThemeTemplate } from "interfaces/ThemeTemplate";

@Component({
  selector: "app-multiselect",
  templateUrl: "./multiselect.component.html",
  styleUrls: ["./multiselect.component.css"],
})
export class MultiselectComponent implements OnInit {
  @Input()
  form!: FieldTemplate;
  @Input()
  theme: ThemeTemplate | undefined;
  @Input() group: FormGroup = new FormGroup({});
  set Group(group: FormGroup) {
    this.group = group || new FormGroup({});
  }
  show = false;
  checkArray!: FormArray;
  backup!: any;
  once = true;

  public c!: AbstractControl | undefined;

  constructor(private elementRef: ElementRef) {
    this.show = false;
  }

  ngOnInit(): void {
    this.checkArray = this.group?.get(this.form?.control) as FormArray;
  }

  @HostListener("document:mousedown", ["$event"])
  onglobalClick(e: any): void {
    if (!this.elementRef.nativeElement.contains(e.target)) {
      this.show = false;
    }
  }

  focus(): void {
    this.show = true;
    if (this.once) {
      this.backup = this.form.data;
      this.once = false;
    }
  }

  search(e: any): void {
    this.form.data = this.backup.filter((v: any) => {
      if (this.form?.prop) {
        return v[this.form.prop]
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      } else {
        return v.toLowerCase().includes(e.target.value.toLowerCase());
      }
    });

    if (e.target.value.trim() === "") {
      this.form.data = this.backup;
    }
  }

  checked(value: any): boolean {
    const data = this.data().value;

    return data.find((v: any) => {
      if (this.form?.prop) {
        return v[this.form.prop] === value;
      } else {
        return value.includes(v);
      }
    });
  }

  onCheckboxChange(e: any, option: any): void {
    if (e.target.checked) this.data().push(new FormControl(option));
    else this.remove(option);
  }

  data() {
    const checkArray: FormArray = this.group?.get(
      this.form?.control
    ) as FormArray;
    return checkArray;
  }

  remove(value: string): void {
    this.data().removeAt(
      this.data().value.findIndex((v: string) => v === value)
    );
    this.data();
  }
}
