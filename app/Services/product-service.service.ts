import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { product } from '../Models/product';
import { dress } from '../Models/dress';
import { pantaloni } from '../Models/pantaloni';
import { collection } from 'firebase/firestore';
import { blugi } from '../Models/blugi';
import { rochii } from '../Models/rochii';
import { geci } from '../Models/geci';
import { pulovere } from '../Models/pulovere';
import { tricouri } from '../Models/tricouri';
import { camasi } from '../Models/camasi';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private fs:Firestore) { }
  getProduct(): Observable <product[]>{
    const myCollection:any=collection(this.fs,'Product');
    return collectionData(myCollection);
  }
  getDress(): Observable <dress[]>{
    const myCollection:any=collection(this.fs,'Dress');
    return collectionData(myCollection);
  }
  getPantaloni(): Observable <pantaloni[]>{
    const myCollection:any=collection(this.fs,'Pantaloni');
    return collectionData(myCollection);
  }
  getBlugi(): Observable <blugi[]>{
    const myCollection:any=collection(this.fs,'Blugi');
    return collectionData(myCollection);
  }
  getRochii(): Observable <rochii[]>{
    const myCollection:any=collection(this.fs,'Rochii');
    return collectionData(myCollection);
  }
  getGeci(): Observable <geci[]>{
    const myCollection:any=collection(this.fs,'Geci');
    return collectionData(myCollection);
  }
  getPulovere(): Observable <pulovere[]>{
    const myCollection:any=collection(this.fs,'Pulovere');
    return collectionData(myCollection);
  }
  getTricouri(): Observable <tricouri[]>{
    const myCollection:any=collection(this.fs,'Tricouri');
    return collectionData(myCollection);
  }
  getCamasi(): Observable <camasi[]>{
    const myCollection:any=collection(this.fs,'Camasi');
    return collectionData(myCollection);
  }

}
