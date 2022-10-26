import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  //this method will make HTTP request
  getChannels(channelName: string): Observable<any> {

    //API_KEY = "AIzaSyA8JxOy_ccuIi1z1ZV8paGet7H9zZm7jEk"

    //this will return channel only
    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + channelName + "&type=channel&key=AIzaSyDlehoCWsdjGz9CjtfY_YOJ23w2fVo1MPg" + "&maxResults=12"

    return this.http.get<any>(url)
  }
}

