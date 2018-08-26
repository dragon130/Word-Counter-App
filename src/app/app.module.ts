import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule  , ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { WordCounterComponent } from "./components/word-counter/word-counter.component";

const routes: Routes = [
  { path: "word-counter", component: WordCounterComponent },
  { path: "", redirectTo: "word-counter", pathMatch: "full" }
];

@NgModule({
  declarations: [AppComponent, WordCounterComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule , RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
