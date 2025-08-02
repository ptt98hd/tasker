# Contributors Guide

## Branch Naming Rules

All branches must follow this format:

```
<type>/<contributor>/<short-description>
```

- `<type>`: The type of work (feat, fix, chore, docs, refactor, etc.)
- `<contributor>`: Your GitHub username or team alias
- `<short-description>`: A brief, hyphenated summary of the branch purpose (lowercase, no spaces)
- Optionally, you can add the issue number at the start of the description (e.g., `feat/johndoe/42-user-profile-page`)
- Do not use generic names like `dev`, `test`, or `update`

**Examples:**

- feat/johndoe/user-profile-page
- fix/alice/login-error
- chore/bob/update-deps
- docs/team-docs/contributing-guide
- refactor/johndoe/user-service
- feat/johndoe/42-user-profile-page

> The branch creator is responsible for keeping the branch up to date, code quality, and resolving all review comments until the branch is merged.

## Commit Rules

This project enforces commit message rules using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). All commit messages must follow this format:

```
<type>(<optional-scope>): <description>
```

**Allowed commit/branch types:**

| Type     | Description                                                                       |
| -------- | --------------------------------------------------------------------------------- |
| feat     | A new feature                                                                     |
| fix      | A bug fix                                                                         |
| docs     | Documentation only changes                                                        |
| style    | Changes that do not affect the meaning of the code (white-space, formatting, etc) |
| refactor | A code change that neither fixes a bug nor adds a feature                         |
| perf     | A code change that improves performance                                           |
| test     | Adding missing tests or correcting existing tests                                 |
| build    | Changes that affect the build system or external dependencies                     |
| ci       | Changes to CI configuration files and scripts                                     |
| chore    | Other changes that don't modify src or test files                                 |
| revert   | Reverts a previous commit                                                         |

**Examples:**

- feat: add user login page
- fix(auth): handle expired token error
- docs(readme): add commit rules section
- chore: update dependencies

> Commits that do not use one of the above types will be rejected.
> Use the imperative mood in the description ("add" not "added"/"adds").
> Keep the description concise and clear.

## Pull Request Rules

**Requirements for creating a Pull Request:**

- Use a short, clear, and descriptive title that summarizes the change.
- Write a concise description explaining the purpose, main changes, and link related issues (if any).
- Each PR should focus on a single feature, bugfix, or task.
- Make sure your branch is up to date with the latest main branch.
- Code must pass lint (`npm run lint`) and tests before requesting review.
- Do not commit build files, node_modules, or dependency files.
- Request at least one review and resolve all comments before merging.
- If the PR changes UI/UX, add screenshots or testing instructions.

**Example of a good Pull Request:**

```
Title: feat: implement user profile page

## Description
- Add user profile page with avatar and bio
- Integrate with backend API for user data

## Related Issues
Closes #42

## Screenshots
![Profile Page](https://i.imgur.com/example.png)

## Checklist
- [x] Lint passes
- [x] Tests pass
- [x] Branch is up to date
- [x] Related issues referenced
```
