import { ChangeDetectorRef, Component, ViewChild } from "@angular/core";
import { FormComponent } from "components/form/form.component";
import { ModalComponent } from "components/modal/modal.component";
import * as jsonDataPersonal from "./config/form.json";
import * as jsonModalPersonal from "./config/modal.json";
import {
  FormOutPutTemplate,
  FormTemplate,
  PatternTemplate,
} from "interfaces/FieldTemplate";
import { BaseComponent } from "utils/BaseComponent";
// JSPDF
import { jsPDF } from "jspdf";
import { FormService } from "services/form/form.service";
// Excel
// import ExcelJS from "exceljs";

@Component({
  selector: "app-examples",
  templateUrl: "./examples.component.html",
  styleUrls: ["./examples.component.css"],
})
export class ExamplesComponent extends BaseComponent {
  @ViewChild("modal") modal: ModalComponent | undefined;
  @ViewChild("form1") formDataPersonal: FormComponent | undefined;
  templateDataPersonal: FormTemplate = jsonDataPersonal;
  templateModalPersonal: FormTemplate = jsonModalPersonal;
  public isValid = false;
  data: any;
  backup!: PatternTemplate;

  constructor(
    private cdr: ChangeDetectorRef,
    private formService: FormService
  ) {
    super();
    this.loadData();
    this.formService.getForm().subscribe((form: FormOutPutTemplate) => {
      this.isValid = this.formDataPersonal?.valid() ? true : false;
      console.log(form);
      this.backup = form.fields;
    });
  }

  continue(): void {
    this.modal?.open();
  }

  reset(): void {
    this.formDataPersonal?.reset();
  }

  load(): void {
    this.formDataPersonal?.updateForm(this.backup);
  }

  export_pdf(): void {
    const doc = new jsPDF();
    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");
  }

  async loadData(): Promise<void> {
    const data = await this.get("?food=te");
    console.log(data);
    // Agregar un campo dinamico en el formulario (Marca de vino y Genero)
    this.formDataPersonal?.updateData("wine", data);
    this.formDataPersonal?.updateData("car", data);

    // Actualizar el valor del campo name en el formulario
    this.formDataPersonal?.updateField("name", "Rodrigo");
    this.formDataPersonal?.updateField("gender", "Trashy Blonde");

    this.formDataPersonal?.updateField("date", "11/11/2021");
    this.formDataPersonal?.updateField("car", [{ name: "Trashy Blonde" }]);
    this.cdr.detectChanges();
  }
}
