# AEON Media — Project & Claude Code Starter Pack

This pack contains the brand foundation, visual identity rules, website specification, and persistent Claude Code instructions for the AEON Media portfolio website.

## Package contents

- `CLAUDE.md` — project-level operating instructions for Claude Code. Keep this file at the root of the website repository.
- `.claude/rules/mcp-tool-orchestration.md` — detailed automatic MCP discovery and tool-use policy.
- `.claude/rules/brand-and-copy.md` — brand language, logo, positioning, and benefit-first copy rules.
- `docs/AEON_MEDIA_PROJECT_DOCUMENTATION.md` — the main project brief and source of truth for the brand and website.
- `docs/AEON_MEDIA_COLOR_PALETTE.md` — approved colour palette, roles, ratios, and usage rules.
- `docs/AEON_MEDIA_WEBSITE_SPECIFICATION.md` — sitemap, page-by-page content direction, user experience, components, motion, accessibility, and technical implementation guidance.
- `assets/aeon-media-wordmark-reference.png` — the user's visual reference for the ONME highlight treatment in the AEON MEDIA wordmark.
- `assets/aeon-media-theme.css` — starter CSS custom properties for the approved palette and basic brand tokens.

## How to use this with Claude Code

1. Copy the contents of this pack into the root of the actual AEON Media website repository. Merge the `.claude` folder if one already exists; do not overwrite unrelated project rules.
2. Make sure `CLAUDE.md` is placed at the repository root, beside `package.json` (or the equivalent project root file).
3. Keep the documentation under `docs/` and the reference image under `assets/`.
4. Open Claude Code from the website repository. Claude Code should load the root `CLAUDE.md` as project instructions. The instructions require Claude to consult the relevant project documents and discover applicable tools from the MCP servers already available in that session whenever substantial work is requested.
5. No MCP server names, connection details, API keys, or credentials are hard-coded in this pack. Claude must inspect the tools that are actually available in the current session and use only those tools.

## Important scope note

This pack configures **project-level behaviour**. It does not install MCP servers, change Claude Code account settings, edit your global Claude Code configuration, or grant new permissions. The automatic behaviour applies when Claude Code is working inside the repository that contains this `CLAUDE.md` and the connected MCP tools are available in that session.

## Source-of-truth order

When instructions appear to conflict, follow this order:

1. The user's latest explicit direction.
2. `CLAUDE.md` and the `.claude/rules/` instructions.
3. The main project documentation.
4. The website specification and colour palette.
5. Claude's own design or technical suggestions.

Do not treat a suggestion as an approved decision until the user approves it.
