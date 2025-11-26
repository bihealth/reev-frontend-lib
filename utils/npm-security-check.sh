#!/bin/bash
# Quick security check for npm dependencies
# Run this before accepting any npm dependency updates

set -e

echo "🔒 NPM Security Quick Check"
echo "=========================="
echo ""

cd "$(dirname "$0")/.."

echo "1. Running npm audit..."
npm audit --production || echo "⚠️  Vulnerabilities found - review above"
echo ""

echo "2. Checking for suspicious install scripts..."
if grep -r "postinstall\|preinstall" package.json; then
    echo "⚠️  Install scripts detected - review manually"
else
    echo "✓ No install scripts in package.json"
fi
echo ""

echo "3. Running comprehensive scan..."
./utils/scan-npm-compromise.sh
echo ""

echo "4. Reviewing recent package.json changes..."
git diff HEAD package.json package-lock.json | head -50
echo ""

echo "✅ Security check complete!"
echo ""
echo "Next steps:"
echo "1. Review any warnings above"
echo "2. Check changelog of updated packages"
echo "3. Verify package maintainers haven't changed"
echo "4. Test in isolated environment before merging"
