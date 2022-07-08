import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { BaseComponent } from "utils/BaseComponent";
import { AppInjector } from "utils/Injector";

import { DatepickerComponent } from "./datepicker.component";

describe("DatepickerComponent", () => {
  let component: DatepickerComponent;
  let fixture: ComponentFixture<DatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
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
      declarations: [DatepickerComponent, BaseComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [HttpClient, TranslateService],
    }).compileComponents();
  });

  beforeEach(() => {
    AppInjector.injector = TestBed;
    fixture = TestBed.createComponent(DatepickerComponent);
    component = fixture.componentInstance;
    component.form = { control: "date", type: "datepicker" };
    component.group = new FormGroup({ date: new FormControl() });
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
