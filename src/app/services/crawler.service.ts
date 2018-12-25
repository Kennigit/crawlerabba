import { Injectable } from "@angular/core";
import { IPost } from "./post.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CrawlerService {
  private newsURL =
    "https://newsapi.org/v2/everything?" +
    "q=Luis Elizondo&" +
    "language=en&" +
    "from=2018-12-01&" +
    "sortBy=popularity&" +
    "apiKey=8c2df35677494d4985b00e59c23e5207";
  constructor(private http: HttpClient) {}

  fetchFromApi = (): Observable<IPost[]> => {
    return this.http
      .get<any[]>(this.newsURL)
      .pipe(
        map((data: any) => data.articles.map(item => this.convertToPost(item)))
      );
  };

  convertToPost = (item: any): IPost => {
    console.log(item);
    return {
      description: item.highlight,
      type: "",
      id: 0,
      title: item.title,
      uploadDate: "",
      user: "",
      url: item.url
    };
  };
}
