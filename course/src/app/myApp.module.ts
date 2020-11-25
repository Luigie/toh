// #docplaster
// #docregion, v1
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
// #docregion import-http-client
import { HttpClientModule } from "@angular/common/http";
// #enddocregion import-http-client

// #docregion import-in-mem-stuff
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppComponent } from "./app.component/app.component";

// #enddocregion import-in-mem-stuff

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // #docregion in-mem-web-api-imports
    HttpClientModule,
  ],
  exports: [],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class MyAppModule {}
