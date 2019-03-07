# dump-to-file-sync
Write messages to file in sync, in situalizations like controlled crash

##

```js
import dumpToFileSync from '@xud6/dump-to-file-sync'
dumpToFileSync('some crash report','crash-report')
process.exit(1);
```
