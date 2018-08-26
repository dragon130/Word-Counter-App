import { Component, OnInit } from "@angular/core";
import { CompileMetadataResolver } from "@angular/compiler";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-word-counter",
  templateUrl: "./word-counter.component.html",
  styleUrls: ["./word-counter.component.css"]
})
export class WordCounterComponent implements OnInit {
  counts = {};
  keys = [];

  constructor() {}

  ngOnInit() {}

  onSubmit(inputText) {
    // let allwords = inputText.join("\n");
    this.emptyKeysCount();

    let tokens = inputText.split(/\W+/);

    for (let i = 0; i < tokens.length; i++) {
      let word = tokens[i].toLowerCase();
      if (/\w{2,}/.test(word)) {
        if (this.counts[word] === undefined) {
          this.counts[word] = 1;
          this.keys.push(word);
        } else {
          this.counts[word]++;
        }
      }
    }

    // console.log("Keys", this.keys);
    // console.log("Counts", this.counts);

    // for (let x = 0; x < this.keys.length; x++) {
    //   let key = this.keys[x];

    //   this.keyResult = key;
    //   this.countsResult = this.counts[key];
    //   this.result = key + " " + this.counts[key];
    //   console.log("Result", this.result);
    // }
    this.sortByHighestCount();
  }

  getCount(word) {
    // console.log("Get Count Result", this.counts[word]);
    return this.counts[word];
  }

  sortByHighestCount() {
    let wordCounter = this;

    function sorter(a, b) {
      let diff = wordCounter.getCount(b) - wordCounter.getCount(a);
      return diff;
    }

    this.keys.sort(sorter);
  }

  emptyKeysCount() {
    this.counts = {};
    this.keys = [];
  }
}
