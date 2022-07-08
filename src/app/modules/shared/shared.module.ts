import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "components/footer/footer.component";
import { FormComponent } from "components/form/form.component";
import { InputComponent } from "components/input/input.component";
import { ModalComponent } from "components/modal/modal.component";
import { MulticheckboxComponent } from "components/multicheckbox/multicheckbox.component";
import { MultiselectComponent } from "components/multiselect/multiselect.component";
import { RadiobuttonComponent } from "components/radiobutton/radiobutton.component";
import { SelectComponent } from "components/select/select.component";
import { TextareaComponent } from "components/textarea/textarea.component";
import { ValidatorComponent } from "components/validator/validator.component";
import { CheckboxComponent } from "components/checkbox/checkbox.component";
import { ControlComponent } from "utils/ControlComponent";
import { DatepickerComponent } from "components/datepicker/datepicker.component";
import { ButtonComponent } from "components/button/button.component";
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    ControlComponent,
    DatepickerComponent,
    FooterComponent,
    FormComponent,
    InputComponent,
    ModalComponent,
    MulticheckboxComponent,
    MultiselectComponent,
    RadiobuttonComponent,
    SelectComponent,
    TextareaComponent,
    ValidatorComponent,
  ],
  exports: [
    ButtonComponent,
    CheckboxComponent,
    ControlComponent,
    DatepickerComponent,
    FooterComponent,
    FormComponent,
    InputComponent,
    ModalComponent,
    MulticheckboxComponent,
    MultiselectComponent,
    RadiobuttonComponent,
    SelectComponent,
    TextareaComponent,
    ValidatorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient],
      },
    }),
  ],
  providers: [HttpClient, TranslateService],
})
export class SharedModule {}
