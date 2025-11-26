[![CI](https://github.com/bihealth/reev-frontend-lib/actions/workflows/main.yml/badge.svg)](https://github.com/bihealth/reev-frontend-lib/actions/workflows/main.yml)
[![codecov](https://codecov.io/gh/bihealth/reev-frontend-lib/graph/badge.svg?token=Cu4ym12yM0)](https://codecov.io/gh/bihealth/reev-frontend-lib)
[![Documentation Status](https://readthedocs.org/projects/reev/badge/?version=latest)](https://reev.readthedocs.io/en/latest/?badge=latest)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.10633868.svg)](https://doi.org/10.5281/zenodo.10633868)

# REEV Frontend Reuseable Components

Refactored reuseable components for REEV.

This README file describes how to setup your dev environment for this library.
For everything else, see the [REEV Project](https://github.com/bihealth/reev).

## Setup

```
git clone git@github.com:bihealth/reev-frontend-lib.git
cd reev-frontend-lib
npm ci
make serve
# hack away!
```

## Generating TS for Protobuf

Fetch protobuf files from main, and re-generate the TS files, and format them.

```
make proto
```

## NPM Security

This library implements security measures to protect against npm supply chain attacks. See [docs/SECURITY-NPM-SUPPLY-CHAIN.md](docs/SECURITY-NPM-SUPPLY-CHAIN.md) for detailed information.

**Before accepting any npm dependency updates:**

```bash
# Run comprehensive security scan
./utils/scan-npm-compromise.sh

# Or run quick security check (includes scan + audit)
./utils/npm-security-check.sh
```

**Key security measures:**
- Automated scanning for known malicious packages (425+ packages including Shai-Hulud 2.0)
- Dependabot auto-merge disabled for npm updates
- Manual review required for all npm dependency changes
- Detection of suspicious install scripts and network activity

## Developer How-Tos

Checking for upstream updates

```
npx npm-check-updates
```

Apply updates (**⚠️ Run security scan first!**)

```
# 1. Run security check BEFORE updating
./utils/npm-security-check.sh

# 2. Apply updates
npx npm-check-updates --upgrade

# 3. Run security scan AFTER updating
./utils/scan-npm-compromise.sh
```
