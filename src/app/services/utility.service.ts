import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  convertToDate(dateObject: any): Date {
    const { year, month, day } = dateObject;

    return new Date(year, month, day);
  }

}
