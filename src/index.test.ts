import {describe, expect, it} from 'vitest'
import {env, runInDurableObject, SELF} from 'cloudflare:test'

describe('FeedStorage', () => {
  it("doesn't crash", async () => {
    const stub = env.MY_DURABLE.get(env.MY_DURABLE.idFromName('main'))
    const res = await expect(() => stub.myCustomFunc()).rejects.toThrowError('abc')
  })
})
