# CI/CD Pipeline Implementation

## Team Member
- Getoar Limani
- Drilon Limani

## Overview
This project demonstrates a complete CI/CD pipeline implementation using GitHub Actions for a Node.js application. The pipeline includes continuous integration, continuous deployment, and continuous delivery stages.

## CI (Continuous Integration)
The CI pipeline runs automatically on every pull request to the `main` branch.

### Local Testing
To reproduce the CI steps locally before submitting a PR:

# Install dependencies
npm install

# Run linting
npm run lint

# Run tests
npm test

# CD (Continuous Delivery)
The CD pipeline automatically builds and publishes a Docker image when a new git tag is created.

## Deliverable
- Docker image published to Docker Hub
- Image naming convention: getodocker/golang:<tag_version>

## Deployment Guide for New Team Members

## Prerequisites
- Docker Hub credentials (ask team lead for access)
- Git access to the repository

### Deploy a New Version
1. Ensure you're on the main branch:
git checkout main
git pull

2. Create and push a new tag
git tag v1.0.0
gti push origin v1.0.0

3. The GitHub Action will automatically : 
- Run all tests
- Build the Docker image
- Push to Docker Hub as getdocker/golang:v1.0.0

4. Pull and run the new version : 
docker pull getodocker/golang:v1.0.0
docker run -p 3000:3000 getodocker/golang:v1.0.0

5. Verify the deployment :
- Open http://localhost:3000
- You should see "Hello, World!"

# Pipeline Structure
## CI Pipeline (on: pull_request)
- Checkout code
- Setup Node.js
- Install dependencies
- Run linting
- Run tests

## CD Pipeline (on: push with tags)
- Requires successful CI
- Builds Docker image
- Publishes to Docker Hub

# Troubleshooting
If deployment fails:

1. Check GitHub Actions logs for errors
2. Verify Docker Hub credentials
3. Ensure proper tag format
4. Contact maintainer if issues persist

# Technology Stack
- Node.js
- Express
- Docker
- GitHub Actions
- Mocha & Chai for testing
- ESLint for code quality