# New Tab URL - Chrome Extension

A simple and lightweight Chrome extension that lets you redirect new tabs to any URL of your choice.

No fluff, no frills, no hidden security concerns (see section below).

## Installation

1. **Download this extension**

   **Option A: Download ZIP (easiest)**
   - Click the green "Code" button on GitHub
   - Select "Download ZIP"
   - Extract the ZIP file to a folder on your computer

   **Option B: Clone with Git**
   ```bash
   git clone <repository-url>
   ```

2. **Install in Chrome**
   - Open Chrome and go to `chrome://extensions/`
   - Enable **Developer mode** (toggle switch in the top right corner)
   - Click **Load unpacked**
   - Select the folder where you extracted the extension
   - Click **Select Folder**

3. **Set your custom URL**
   - Right-click the extension icon in Chrome's toolbar
   - Click **Options**
   - Enter your desired URL (e.g., `https://news.ycombinator.com`)
   - Click **Save**

4. **Done!**
   - Open a new tab and it will automatically redirect to your chosen URL

## Usage

To change the URL at any time:
- Right-click the extension icon and select "Options", OR
- Go to `chrome://extensions/`, find "New Tab URL", and click "Extension options"

## Security & Privacy

**This extension is safe and respects your privacy:**

- **No data collection** - This extension does not collect, transmit, or share any data
- **No tracking** - No analytics, no telemetry, no third-party services
- **No network requests** - The extension never makes external network calls
- **Minimal permissions** - Only requires `storage` permission to save your URL preference locally
- **Open source** - All code is visible in this repository for you to review
- **URL validation** - Only accepts HTTP/HTTPS URLs, blocks `javascript:` and other potentially malicious schemes
- **Local storage only** - Your URL preference is stored only in Chrome's sync storage (encrypted and controlled by Google)

**What this extension does:**
1. Saves your chosen URL when you click "Save" in the options page
2. Redirects new tabs to that URL

**What this extension does NOT do:**
- Does not access your browsing history
- Does not read content from web pages
- Does not communicate with external servers
- Does not inject scripts into websites
- Does not modify any web pages

The entire codebase is under 100 lines of code - feel free to review it before installing.

## Notes

- If no URL is set, new tabs will default to Google
- The extension requires the "storage" permission to save your URL preference
- Your URL preference syncs across Chrome browsers where you're signed in

## Troubleshooting

- Make sure you include the full URL with `https://` or `http://`
- If the extension isn't working, try removing and reinstalling it
- Check that the extension is enabled in `chrome://extensions/`
