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

import { MultiselectComponent } from "./multiselect.component";

describe("MultiselectComponent", () => {
  let component: MultiselectComponent;
  let fixture: ComponentFixture<MultiselectComponent>;

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
      declarations: [MultiselectComponent, BaseComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [HttpClient, TranslateService],
    }).compileComponents();
  });

  beforeEach(() => {
    AppInjector.injector = TestBed;
    fixture = TestBed.createComponent(MultiselectComponent);
    component = fixture.componentInstance;
    component.form = { control: "name", type: "multiselect" };
    component.group = new FormGroup({ name: new FormControl() });
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
