## Tasks

Primary job is to make sure:

1. Make sure processes are killed, if they get stuck (server related)
2. Make sure runs are cleaned up (ui related)

- move completed builds from "queue" to "complete"
- schedule next run
- handle build errors, based on user settings

## When to execute

1. Every 5 mins

## When not to execute

1. If a project build is running

## Maximum possible number of instances run at a time = 5
