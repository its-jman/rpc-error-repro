# RPC Error Reproduction

## Steps:
1. `npm install`
2. `npx vitest`
3. Observe, `workerd/io/worker.c++:2082: info: uncaught exception; source = Uncaught (in promise); stack = Error: My impl is broken`. Followed by: `Failed to pop isolated storage stack frame in src/index.test.ts's test "doesn't crash".`. Followed by: `Isolated storage failed. There should be additional logs above.`
