import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private afs: AngularFirestore) { }

  addSubs(subsData: any) {
    this.afs.collection('subscribers').add(subsData).then(() => {
      console.log('Subscriber Saved Successfully');
    })
  }

  checkSubs(subsEmail: string) {
    return this.afs.collection('subscribes', ref => ref.where('email', '==', subsEmail)).get();
  }
}
