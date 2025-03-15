The possible states of an account are:

* Active: the account is active and has valid subscription or valid automation credits.
* Demo: the account is in demo mode and has only automation credits gifted for demo.
* Grace period: the account is in grace period, because it either has subscriptions or automation credits that have recently expired.
* Inactive: the account is inactive and cannot be used.
* New: the account is new and has no valid subscription or automation credits.
* Suspended: the account is suspended and cannot be used.

Transition between states:

Accounts are audited every 30 days. The following state transitions are possible:

* New -> Active: when a user purchases a subscription or automation credits.
* New -> Demo: when a user requests a demo and is granted automation credits.
* New -> Grace period: when user creates a dormant account (does make a purchase and the account is not in demo mode).
* Demo -> Active: when a user purchases a subscription or automation credits.
* Demo -> Grace period: when a user does not make a purchase after the demo credits expire.
* Active -> Grace period: when a subscription or automation credits expires and user did not renew after 60 days.
* Grace period -> Inactive: an account in the grace period is deactivated after another 30 days, if the user does not renew.
* Any state -> Suspended: when a user violates the terms of service or the account is flagged for suspicious activity.
* Suspended -> Active: when the user resolves the issue that caused the suspension.
* Suspended -> Inactive: when the user does not resolve the issue that caused the suspension after 30 days.
* Inactive accounts will get deleted after 30 days.
* Inactive accounts can be reactivated through offline support.
