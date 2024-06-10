SOLUTION
========

Estimation
----------
Estimated: 9 hours 20 minutes  
Spent: 8 hours 45 minutes (with Product Viewer de-scoped)

Solution Overview
-----------------
- React + TypeScript
- Redux for state management
- React-Router for route management
- RTKQ for api management
- MUI for components
- RTL for unit testing
- Playwright for e2e testing

Project Plan
------------
- Split into API and UI parts
- API
  - Create interfaces for endpoint requests
  - Create types for endpoint return data
- UI
  - Create layout
  - Create screens
  - Create components
  - Link to API

Task Breakdown
---------------
### Project Scaffolding
`Estimate: 20 mins`
- Install dependencies
- Bundling
- Linting and formatters
- Code splitting
### API Integration
`Estimate: 1 hour`
- Configure RTKQ for api endpoints
- Create types and interfaces
### Components
- Create global components - `Estimate: 45  mins`
  - Header, Sidebar, View
- Set up app component - `Estimate: 30 mins`
  - Add providers and theme
  - Add reset styles
  - Use global components for layout
  - Add routes for product grid and view
- Search components - `Estimate: 3 hours`
  - Filter sidebar
  - Product results view
  - Pagination
  - Product results cards
  - Error and No Results screens
- Filter components - `Estimate: 2 hours`
  - Tags
  - Subscription
  - Price
  - Link filters to search API call
- Product view component - `Estimate: 1 hour`
### Tests
`Estimate: 45 mins`
- Configure jest and playwright
- Unit tests
- E2E tests

Testing Approach
----------------
### Unit Tests
- Jest with React Testing Library
- Render components with mock data and validate
- Test reducers against the actual store by dispatching actions
  - Mock fetch so no network requests are made
### E2E Tests
- Playwright
- Test each of the user acceptance criteria
- Use the actual web and api server
### Edge cases to consider
- Network latency
- API failure
- Data shape changes from API
- Different viewport sizes and devices