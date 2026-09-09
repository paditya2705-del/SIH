# ShramSetu Implementation Plan

## 1. Project Goal

Build a cooperative-first digital service platform that connects skilled workers with households and institutions through a fair, transparent, and welfare-oriented marketplace. The app should reflect the product direction described in [README.md](README.md): fair allocation, protected worker earnings, welfare tracking, and operational transparency for cooperative admins.

---

## 2. Product Strategy

### Core user journeys

1. Customer requests a service
2. System classifies the issue and identifies eligible workers
3. FairDispatch ranks workers using skill, quality, distance, and fairness metrics
4. Customer selects a worker or the system assigns one
5. Job is tracked and completed
6. Payment is processed with worker earning protection
7. Welfare contribution and benefit records are updated
8. Admin monitors fairness, demand, and shortfall trends

### Primary differentiators

- Fair worker allocation
- protected worker earnings floor
- welfare wallet and benefit tracking
- transparent allocation reasoning
- cooperative-centric admin oversight

---

## 3. Solution Architecture

### Frontend
- React + Vite for web UI
- Mobile-first design for customer and worker flows
- modular folder structure based on features and pages

### Backend
- Node.js + Express
- modular monolith architecture
- route/controller/service pattern
- middleware for auth, roles, and errors

### Database
- PostgreSQL
- relational data model for users, workers, services, bookings, payments, complaints, and welfare data

### AI / Analytics Layer
- Python service for demand forecasting, classification, and job matching
- use simple forecasting models first, then improve based on real data

### Shared principles
- keep the MVP modular and testable
- prefer a single backend with clear module boundaries
- avoid overengineering in phase one

---

## 4. Phase-wise Delivery Plan

## Phase 1: Foundation and Setup

### Objectives
- initialize app structure
- choose project architecture
- set up development environment
- define coding conventions and folder standards

### Tasks
- create root project folders for frontend, backend, and shared docs
- initialize frontend with Vite and React
- initialize backend with Node + Express
- set up environment variables
- define base API configuration
- add gitignore, README, and project conventions
- create common database schema starter

### Deliverables
- working frontend app shell
- working backend server shell
- document for setup and commands

### Exit Criteria
- frontend runs locally
- backend server runs locally
- project structure is consistent and reusable

---

## Phase 2: Core Data Model and Database

### Objectives
- define system entities
- create schema for all major modules
- prepare basic constraints and relations

### Core entities
- Users
- Workers
- Customers
- Cooperatives
- Services
- Service categories
- Bookings
- Payments
- Reviews
- Complaints
- Notifications
- Welfare wallet entries
- Allocation / fairness logs

### Tasks
- design PostgreSQL tables
- define relations and foreign keys
- create seed data for service categories and sample workers
- define initial enums for user roles and booking status
- document API data contracts

### Deliverables
- initial ERD or schema docs
- migration setup or SQL seed files
- sample testing data

### Exit Criteria
- all major entities exist in schema
- sample records can be created via scripts

---

## Phase 3: Authentication and User Roles

### Objectives
- enable signup/login
- create role-based access control
- support customer, worker, admin, and cooperative roles

### Tasks
- create auth endpoints
- create JWT/session strategy
- define role middleware
- build login/register flows in frontend
- create protected route logic
- store user state in app-level state or auth context

### Deliverables
- auth API
- auth screens
- route guards
- role-based dashboard access

### Exit Criteria
- customer and worker can sign in
- admin can view restricted pages
- unauthorized users are blocked

---

## Phase 4: Service Discovery and Booking Flow

### Objectives
- allow customers to describe their needs
- classify requests into services
- match and display available workers

### Tasks
- create service category models and APIs
- implement customer request form
- create service matching endpoint
- add worker availability and location support
- create booking creation flow
- add worker acceptance and scheduling workflow

### Deliverables
- customer home screen
- request form with AI-assist classification hook
- worker list and booking summary
- status tracking page

### Exit Criteria
- a customer can create a booking
- assigned worker can accept or reject it
- booking state transitions are persisted

---

## Phase 5: FairDispatch and FairPay Engine

### Objectives
- implement the real differentiator of the platform

### FairDispatch logic
- score workers by skill match
- factor in experience and quality
- account for location and availability
- include recent workload and allocation fairness
- enforce minimum quality threshold before fairness weighting

### FairPay logic
- define configurable wage floor
- compute service value and worker payout
- deduct platform/cooperative costs after minimum worker protection
- log all settlement values and reasons

### Tasks
- design allocation scoring model
- implement worker ranking service
- create payout engine and calculations
- create logs for transparent rejection and allocation explanation
- expose worker-facing fairness dashboard

### Deliverables
- matching rules engine
- payout computation API
- allocation explanation view

### Exit Criteria
- job assignment is explainable
- payout rules are reproducible
- fairness metrics can be shown to workers and admins

---

## Phase 6: Worker Welfare Wallet and Benefits

### Objectives
- convert welfare claims into operational transactions

### Tasks
- create wallet model for each worker
- track earnings, welfare contributions, and deductions
- attach wallet updates to successful bookings
- record insurance and training credits
- build worker wallet dashboard
- expose admin benefit summary module

### Deliverables
- worker benefits dashboard
- wallet APIs
- welfare report for admin

### Exit Criteria
- each completed booking updates wallet records
- benefit history can be viewed by worker and admin

---

## Phase 7: Reviews, Complaints, and Support

### Objectives
- increase trust and accountability

### Tasks
- implement service review flow after completion
- add complaint submission and status update
- track resolution and escalation
- create admin moderation and response workflow
- protect worker and customer trust through clear messaging

### Deliverables
- review and complaint modules
- admin complaint panel
- trust and service quality analytics

### Exit Criteria
- user can leave ratings and complaints
- admin can track unresolved issues

---

## Phase 8: Admin Dashboard and Operations Intelligence

### Objectives
- make the platform useful to cooperative administrators

### Features
- booking and service volume summary
- workforce fairness panel
- worker shortage alerts
- service demand forecasting
- complaint, review, and welfare analytics
- cooperative member management

### Tasks
- build admin landing dashboard
- create analytics widgets
- implement filtering by region, service, and time
- expose fairness and payout reports
- add recommendation panel for workforce planning

### Deliverables
- admin dashboard UI
- analytics endpoints
- operations toolset

### Exit Criteria
- admin can monitor fairness and demand trends
- admin can operate the platform without manual spreadsheet reporting

---

## Phase 9: AI Integration

### Objectives
- add forecasting and classification without overengineering the MVP

### Tasks
- build AI service for service category identification from natural language input
- implement demand forecast model using seed + real data
- implement workforce gap estimation
- expose simple AI APIs to frontend
- provide fallback when model is unavailable

### Deliverables
- AI / classification endpoints
- demand forecast outputs
- worker planning insights

### Exit Criteria
- app can classify common user requests
- forecast results appear in admin dashboard
- AI remains transparent and non-blocking for users

---

## Phase 10: Security, Testing, and Production Readiness

### Objectives
- improve reliability and reduce risk

### Tasks
- add input validation
- secure JWT usage and secret management
- implement error handling and logging
- add unit and integration tests
- test major flows: signup, login, booking, payout, complaint
- test edge cases like cancellation and low worker availability
- ensure admin auth and worker protections work

### Deliverables
- test suite
- secure app configuration
- deployment checklist

### Exit Criteria
- critical flows pass automated tests
- app is stable enough for demo deployment

---

## 5. Recommended Sprint Structure

### Sprint 1: Foundation
- setup project structure
- backend server and frontend app shell
- database model draft
- environment configuration

### Sprint 2: Auth and Roles
- sign up/login
- protected routes
- role permissions

### Sprint 3: Services and Booking
- service categories
- customer request flow
- booking creation
- worker assignment

### Sprint 4: Fairness + Payments
- worker matching logic
- payout engine
- allocation explanation

### Sprint 5: Welfare + Dashboard
- wallet and benefits
- admin dashboard
- analytics widgets

### Sprint 6: AI + polish
- natural-language categorization
- demand forecast
- UI polish and responsive improvements

### Sprint 7: Testing + demo readiness
- bug fixes
- QA
- demo flow validation
- deployment

---

## 6. Technical Notes

### Keep the MVP simple
Avoid building all advanced features at once. The goal is to prove the fairness-first business model clearly, not to release a huge platform.

### Prioritize evidence over complexity
The strongest demo is one full booking lifecycle showing:
- customer request
- worker matching
- fair assignment
- payment
- welfare updating
- admin observability

### Build for low-digital-literacy users
Use large touch targets, clear labels, vernacular support, and simple workflows. The customer and worker flows should be easy for first-time users.

---

## 7. Suggested Milestone Timeline

### Week 1
- project setup
- schema planning
- backend and frontend initialization

### Week 2
- auth + roles
- service and worker models
- booking flow beginning

### Week 3
- booking completion and assignment logic
- fair pay and fair dispatch prototypes

### Week 4
- welfare wallet and admin dashboard
- analytics and AI prototype

### Week 5
- bug fixing and UX improvements
- testing and demo rehearsal

### Week 6
- final polish and deployment

---

## 8. Risk Areas to Watch

- overbuilding the MVP
- too much focus on generic marketplace features instead of fairness mechanics
- weak data model if fairness and payout logic are not designed upfront
- unclear role permissions
- AI being presented as a feature before there is enough data to support it

---

## 9. Final Recommendation

If the team wants the strongest result for the SIH problem, the implementation should center on these three pillars:

1. FairDispatch
2. FairPay
3. Worker Benefit Wallet

Everything else—booking, tracking, reviews, payments, admin screens, maps, and AI utilities—should support those three pillars.

This makes the platform clearly aligned with the SIH problem statement and gives the app a real competitive and intellectual edge.

---

## 10. Immediate Next Step

The next action should be:

- finalize the database schema
- build the base backend module structure
- create the customer and worker landing screens
- implement one end-to-end demo booking flow

That will give the team a working MVP quickly while keeping the product aligned with the fairness-first vision.
