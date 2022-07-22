import { Injectable } from '@angular/core';

@Injectable()
export class DebugService {
  info(message: string): void{
    console.log(message);
  }
  constructor() { }
}
