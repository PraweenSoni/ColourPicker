# Color Picker Extension

A simple and intuitive color picker browser extension that allows users to pick colors, save them, and manage their list of selected colors. The extension also includes a convenient "Clear All" button to remove all saved colors with a single click.

## Features
- **Pick Colors**: Pick any color you select.
- **Color List**: View a list of all the colors you’ve picked.
- **Clear All**: Easily clear the entire color list with a single button.
- **User-Friendly Design**: Simple and minimalistic interface.

## Future Ideas 
- Suggest some Colour(Light/Dark Mode).
- Color test in text also background.

## Installation
1. Clone or download this repository.
2. Open your preferred browser (e.g., Chrome or Edge).
3. Navigate to the **Extensions** page:
   - In Chrome: Go to `chrome://extensions/`
   - In Edge: Go to `edge://extensions/`
4. Enable **Developer Mode** (toggle switch in the top-right corner).
5. Click on **Load unpacked** and select the folder containing this extension's code.
6. The extension will now appear in your browser’s extension bar.

## Usage
1. Click on the extension icon in the browser toolbar to open the color picker.
2. Use the color selection tool to pick a color. The color will be added to your list.
3. View your saved colors in the list.
4. Click the "Clear All" button to remove all saved colors.

## Folder Structure
```plaintext
.
├── manifest.json       # Extension metadata and configuration
├── index.html          # The extension's UI
├── style.css           # Styles for the UI
├── main.js            # JavaScript functionality for the extension
├── icon.png            # Extension icon (optional)
└── README.md           
