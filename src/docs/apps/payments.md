## Target

All accounts

- Loop through accounts
  + manage automation credits
    * automatically reload, if treashold is met
    * disallow overage, if no auto reload activated
  + check with stripe, if user has valid payment method, else notify

## When to execute

1. Every 6 hrs

## When not to execute

1. If a project build is running
2. If account is already under audit (to be defined)

## Maximum possible number of instances run at a time = 1
