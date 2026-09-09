# Role-Based Screen Implementation Plan

## Objective
Allow the app to show the correct screen based on the selected user role so the customer, worker, and admin each see their own experience only.

## Scope
- create a simple role selector in the app shell
- map each role to its dedicated screen
- keep the app stable and easy to demo
- preserve the existing design language

## Tasks
1. Add a role selection bar at the top of the app
2. Connect each role to its matching screen
3. Keep the default selection as Customer for first-time demo use
4. Validate the project build after the change

## Expected result
When the user selects Customer, the app shows the customer experience. When Worker is selected, the worker dashboard appears. When Admin is selected, the admin dashboard appears.
