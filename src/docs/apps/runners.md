## Tasks

Pick up ready build tasks, if
- account ok, else throw out job
- subscription ok, else throw out job and inform user
- parallel builds ok, else try again later + send email to user

## When to execute

1. Every minute

## When not to execute

1. If a project build is running
2. If account is already under audit (to be defined)

## Maximum possible number of instances run at a time = 5
