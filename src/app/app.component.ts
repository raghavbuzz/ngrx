import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "./counter/app-state";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "store-practice";
  counter$;

  constructor(private store: Store<AppState>) {
    this.counter$ = store.select("counter");
  }

  increment() {
    this.store.dispatch({ type: "INCREMENT" });
  }

  decrement() {
    this.store.dispatch({ type: "DECREMENT" });
  }
}
