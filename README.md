# ShramSetu

## Project Vision

ShramSetu is a cooperative-first digital platform that connects skilled informal and semi-formal workers with households, institutions, and local demand through a transparent, fair, and welfare-oriented system. The platform is designed for the Ministry of Cooperation ecosystem and aims to strengthen labour cooperatives by creating a structured digital channel for work discovery, matching, payments, and worker welfare.

The core idea is not just to build a service marketplace. The real innovation is to build a platform where worker allocation, earnings, and welfare are governed by fairness-based mechanisms, not just by platform discretion.

---

## Problem Statement

Labour cooperative federations and societies often have skilled workers but lack a structured and trusted digital channel to connect them with customers and institutions. At the same time, households and institutions need reliable, verified, and accountable service providers.

The current marketplace model often focuses on convenience, but it can fail on:

- worker exploitation
- low transparency in job allocation
- unequal access to work opportunities
- weak welfare tracking
- limited worker trust
- poor support for low-digital-literacy users

ShramSetu aims to address these gaps by creating a cooperative-owned digital ecosystem that blends service matching with worker welfare, fair payouts, and transparent operations.

---

## Why this is different from a normal service marketplace

A normal marketplace solves discovery, bookings, payments, and reviews. ShramSetu goes beyond that by embedding three differentiated mechanisms:

### 1. FairDispatch
A fair allocation engine that balances:

- skill suitability
- experience and quality
- distance and availability
- recent workload
- recent earnings
- fairness across allocations

This ensures that a worker is not repeatedly ignored or disadvantaged simply because another worker has a higher rating or a more convenient profile.

### 2. FairPay
A configurable payout model that protects a minimum worker earning threshold before platform or cooperative costs are considered. This creates a transparent and humane wage structure rather than a purely commission-based payout model.

### 3. Worker Benefit Wallet
Every completed job contributes to the worker's welfare records, including:

- welfare contributions
- insurance tracking
- emergency support
- training credits
- benefit history

This transforms worker welfare from a branding claim into a measurable and transactional benefit.

---

## Core Product Principles

### Cooperative-first
The platform is designed to support labour cooperatives, federations, and member-based worker networks rather than isolated gig workers.

### Worker dignity
The system prioritizes fair work allocation and transparent earnings, not just demand generation.

### Trust and accountability
Every job involves verification, clear allocation reasoning, digital settlement, and welfare tracking.

### Inclusive access
The product should support users who may have limited digital literacy, language barriers, or low-tech comfort. The user experience must be simple, guided, and multilingual.

### AI with realistic maturity
AI should support demand forecasting, workforce planning, and service classification, but the platform should begin with a practical, cold-start strategy and improve over time using real data.

---

## Target Users

### 1. Customers
Households, institutions, and local organizations seeking verified workers for everyday and urgent services.

### 2. Workers
Skilled service workers connected to cooperatives or unions who need steady access to jobs, fair wages, and welfare support.

### 3. Cooperatives / Federation Admins
Organizations managing worker onboarding, verification, welfare, demand planning, and operational oversight.

### 4. Administrators
Operations staff monitoring allocations, service quality, fairness metrics, shortages, and demand trends.

---

## Main Features

### Customer-side
- Service discovery and request creation
- AI-assisted service classification
- Worker matching by skill and geography
- Booking and scheduling
- Live tracking and communication
- Digital payment and settlement
- Reviews and complaints
- Emergency and urgent service flows

### Worker-side
- Worker onboarding and profile setup
- Job assignment and acceptance
- Earnings dashboard
- Fairness and allocation explanation
- Welfare wallet and benefit status
- Training and support availability
- Availability management
- Rating and feedback updates

### Admin-side
- Cooperative member management
- Worker verification and certification tracking
- Demand forecasting dashboard
- Workforce planning and shortages
- Fairness metrics and allocation monitoring
- Complaint handling and dispute resolution
- Welfare and benefits analytics

---

## AI and Analytics Strategy

ShramSetu should use AI in a practical and honest way:

### Demand Forecasting
Predict upcoming demand by category, time period, and geography using:

- historical usage data
- seasonal trends
- service category demand
- geography and timing patterns

### Workforce Planning
Estimate expected demand and compare it with available worker capacity, identifying shortages by skill and zone.

### Job Matching
Match customers to workers based on quality, location, availability, and fairness-adjusted criteria.

### Service Request Understanding
Use speech and text-based natural language understanding to detect service intent, category, and urgency.

### Cold-start approach
Since a new platform begins with limited data, the launch version should use seeded and synthetic data with a progressive AI upgrade lifecycle as real transaction data accumulates.

---

## User Experience Direction

### Customer UX
The core action should be “Tell us what you need” rather than “browse a long catalog.”

Example flow:

1. describe the problem
2. AI identifies the likely service type
3. eligible workers are matched
4. the customer reviews the worker and timing
5. booking, tracking, payment, and review happen in a single journey

### Worker UX
The worker dashboard should show:

- jobs available
- earnings today
- fairness status
- welfare balance
- upcoming assignments
- support and training opportunities

### Admin UX
The admin dashboard should focus on operational intelligence:

- total bookings
- unassigned tasks
- allocation fairness
- worker shortages
- forecasted demand
- welfare trends
- complaint status

---

## Technical Architecture Recommendation

### Frontend
- React / Vite for web admin and customer-facing interfaces
- React Native or Expo for mobile app workflows if the project is extended to multilingual mobile delivery

### Backend
- Node.js with Express or FastAPI
- Modular monolith architecture rather than microservices in the MVP

### Database
- PostgreSQL for core transactional data

### Mapping and geolocation
- Mapbox, Google Maps, or Leaflet integration

### AI service
- Python-based AI service for forecasting, classification, and worker-job matching

### Core platform layers
- Authentication and access control
- Booking and service management
- Settlement and payments
- Welfare wallet and benefits
- Allocation and fairness engine
- Notifications and communication
- Analytics and AI

---

## Product Differentiators

The strongest version of the platform is not “another booking app.” It is:

- cooperative-linked worker network
- transparent fair allocation
- minimum earning protection
- welfare wallet integration
- explainable worker allocation decisions
- trust-building operational transparency

This is the layer that can meaningfully differentiate the idea from existing service marketplaces.

---

## MVP Scope

The initial MVP should focus on a narrow but compelling version of the platform:

- user signup and role selection
- worker registration and verification
- service request intake
- job matching with fairness logic
- booking flow
- worker acceptance
- payment and settlement
- welfare wallet recording
- ratings and complaints
- admin dashboard with fairness and operational views

The MVP should not try to solve every possible problem at once. It should demonstrate the fairness engine and the cooperative value proposition clearly.

---

## Out of Scope for Initial Demo

The following should be deferred to later phases unless required by the evaluation:

- full government database integration
- complex DAO-style governance
- blockchain-based settlement
- advanced insurance platform integration
- multi-language support at scale in the first version
- large ML models beyond targeted forecasting and classification
- broad real-time systems beyond essential functionality

---

## Demo Story

A strong hackathon pitch can be built around a single end-to-end story:

1. Customer reports a leaking kitchen pipe.
2. The platform categorizes the issue and finds eligible workers.
3. FairDispatch ranks candidates based on skill, distance, availability, and fairness metrics.
4. A worker accepts the task.
5. The task is tracked and completed.
6. Payment is processed with the worker earning floor protected.
7. Welfare contribution and benefits are updated.
8. Admin sees allocation fairness, demand forecasting, and operational health in real time.

This one story demonstrates the platform's real value.

---

## Project Name and Branding

ShramSetu is a suitable working name for the product and can be refined later based on final product positioning, stakeholder feedback, and competitive clarity.

---

## Final Positioning Statement

ShramSetu is a cooperative-first digital service marketplace built to connect skilled workers with households and institutions while ensuring fair allocations, protected earnings, and measurable welfare benefits.

It is not simply a booking platform; it is a digital infrastructure layer for worker dignity, cooperative trust, and transparent service operations.

---

## Summary

The project direction is strongest when framed as:

> a fair, cooperative-owned service marketplace where worker allocation, wages, and welfare are built into the platform itself.

That position directly aligns with the SIH problem statement, the Ministry of Cooperation context, and the broader need for digital inclusion and worker trust.
