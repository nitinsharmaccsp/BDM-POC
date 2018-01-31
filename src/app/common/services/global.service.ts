import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class GlobalService {

  constructor(private httpClient: HttpClient) { }
        public getRequest ( requestUrl: string ): Observable<any> {
            return this.httpClient
            .get(requestUrl)
            .map(response => this.handleResponse(response))
            .catch(error => this.handleError(error));
        }
         
        
        public postRequest<T> (requestUrl: string, postBody: T): Observable<any> {
            return this.httpClient.post(requestUrl, postBody)
            .map(response => this.handleResponse(response))
            .catch(error => this.handleError(error));
        }
        private getHeaders (): Headers {
          const header = new Headers();
          header.set('Content-Type', 'application/json');
          header.set('Accept', 'application/json');
          return header;
      }
      private handleResponse(response: any): any {
          // Check response and see if there's an error,
         // console.log("hello");
         if (response.constructor === {}.constructor) {
            return response;
        }
          const responseJson = response.json();
          if (responseJson.error !== undefined ) {
              // Handle Error
          }
          return responseJson;
      }
      private handleError(error: any): any {
          // if there's an error based on standardized format throw an error
          // and catch at component level
          Observable.throw(error);
      }

}
