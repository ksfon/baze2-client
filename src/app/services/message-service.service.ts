import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  private subject = new Subject<any>();

  sendMessage(message: string) {
    console.log('usao saljem');
    
      this.subject.next({ text: message });
  }

  clearMessages() {
      this.subject.next();
  }

  getMessage(): Observable<any> {

      return this.subject.asObservable();
   
  }
}
