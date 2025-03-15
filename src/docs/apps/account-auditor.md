## Target

All accounts

- Loop through accounts
  + Clear demoRequest if notificationExpiry has exceeded
  + Update account.state
  + Subtract expired credits and notify user
+ Inform user if account state changes

## When to execute

1. Every 6 hrs

## When not to execute

0. If audit is due (every 30 days)
1. If a project build is running
2. If account is already under audit (to be defined)

## Maximum possible number of instances run at a time = 1
