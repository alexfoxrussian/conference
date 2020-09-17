import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LectureModel} from "../models/LectureModel";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class LectureService {
  constructor(private httpClient: HttpClient) {
  }

  public loadLectures(): Observable<LectureModel[]> {
    return this.httpClient.get<LectureModel[]>("./assets/mocks/lectures.json");
  }
}
