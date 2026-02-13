# GitHub Actions Workflow Setup

## Overview

The `add-to-project.yml` workflow automatically adds issues labeled with "Summer School 2026" and "Course Progress" to a GitHub Project board under the TODO status.

## Configuration Steps

### 1. Find Your Project URL and Number

1. Navigate to your GitHub Project board
2. The URL will look like one of these:
   - **Organization project**: `https://github.com/orgs/Cambridge-ICCS/projects/1`
   - **Repository project**: `https://github.com/Cambridge-ICCS/summer-school-guidance/projects/1`
3. Note the project number (the last digit in the URL)

### 2. Create a Personal Access Token (PAT)

For GitHub Projects v2, you need a Personal Access Token with specific permissions:

1. Go to **GitHub Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Click **Generate new token (classic)**
3. Give it a descriptive name (e.g., "Summer School Project Automation")
4. Select the following scopes:
   - ✅ **repo** - Full control of private repositories
   - ✅ **project** - Full control of projects (required for Projects v2)
   - ✅ **org:read** - Read org and team membership (if using org-level projects)
5. Set an appropriate expiration date
6. Click **Generate token**
7. **Important**: Copy the token immediately - you won't be able to see it again!

### 3. Add the PAT as a Repository Secret

1. Go to your repository **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `ADD_TO_PROJECT_PAT`
4. Value: Paste the PAT you generated in step 2
5. Click **Add secret**

### 4. Update the Workflow File

Edit `.github/workflows/add-to-project.yml` and update the `project-url` on line 45:

```yaml
project-url: https://github.com/orgs/Cambridge-ICCS/projects/YOUR_PROJECT_NUMBER
```

Replace `YOUR_PROJECT_NUMBER` with the actual project number from step 1.

## How It Works

1. **Trigger**: The workflow runs when an issue is opened or labeled
2. **Filter**: It only processes issues that have BOTH labels:
   - "Summer School 2026"
   - "Course Progress"
3. **Action**: Uses the `actions/add-to-project` action to add the issue to the project
4. **Status**: The issue is automatically added to the first column (typically "TODO")

## Testing

To test the workflow:

1. Create a new issue using the "Course Progress Tracker" template
2. The issue will automatically have both required labels
3. Check the **Actions** tab to see the workflow run
4. Verify the issue appears in your project board under TODO

## Troubleshooting

### Workflow doesn't run
- Check that both labels are present on the issue
- Verify the workflow file is in the correct location: `.github/workflows/add-to-project.yml`

### Workflow runs but fails to add issue
- Verify the `ADD_TO_PROJECT_PAT` secret is configured correctly
- Check that the PAT hasn't expired
- Ensure the project URL is correct
- Verify the PAT has the required permissions (repo, project, org:read)

### Permission errors
- The PAT must have `project` scope for Projects v2
- For organization projects, ensure the PAT has `org:read` scope
- The PAT owner must have write access to the project

## Alternative: Using GITHUB_TOKEN

**Note**: GitHub's default `GITHUB_TOKEN` does NOT have permissions to add items to Projects v2. You must use a PAT with the `project` scope. This is a limitation of GitHub Actions for Projects v2.

If GitHub adds support for `GITHUB_TOKEN` in the future, you could update line 46 to use:
```yaml
github-token: ${{ secrets.GITHUB_TOKEN }}
```

However, this currently will not work with Projects v2.
