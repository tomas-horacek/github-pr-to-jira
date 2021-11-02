# Github PR to Jira

A chrome plugin that adds links from Github PRs to Jira cases. It does work most of the time, for some reason it is broken by the Checks tab.

Uses regex to find `SEM-\d+` or `CUST-\d+` in the header element and transforms it into `a` link.

## Installation

- Download the extension files
- Open the Extension Management page by navigating to `chrome://extensions`.
  - Alternatively, open this page by clicking on the Extensions menu button and selecting Manage Extensions at the bottom of the menu.
  - Alternatively, open this page by clicking on the Chrome menu, hovering over More Tools then selecting Extensions
- Enable Developer Mode by clicking the toggle switch next to Developer mode.
- Click the Load unpacked button and select the extension directory.
- You can update the Regex in `contentscript.js` to add other projects.
