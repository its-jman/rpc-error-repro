import {DurableObject} from 'cloudflare:workers'

export class MyDurable extends DurableObject {
  myCustomFunc() {
		throw new Error('My impl is broken')
  }
}
