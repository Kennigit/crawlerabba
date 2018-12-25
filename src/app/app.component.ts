import { CrawlerService } from "./services/crawler.service";
import { Component, OnInit } from "@angular/core";
import { IPost } from "./services/post.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "crawlerabba";
  posts: IPost[] = [];

  constructor(private _crawlerService: CrawlerService) {}

  ngOnInit(): void {
    this._crawlerService.fetchFromApi().subscribe((data: IPost[]) => {
      this.posts = data;
      console.log(data);
    });
  }
}
