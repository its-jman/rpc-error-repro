import {DurableObject, type WorkerEntrypoint} from 'cloudflare:workers'

export class MyDurable extends DurableObject {
  myCustomFunc() {
		throw new Error('My impl is broken')
  }
}

export default <WorkerEntrypoint>{
}
