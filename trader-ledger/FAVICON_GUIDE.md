# Trader Ledger Favicon Guide

## Current Favicon

The Trader Ledger favicon is an SVG file (`favicon.svg`) that displays:
- Green circular background (#2e7d32)
- White ledger book with dark green spine
- Horizontal lines representing ledger entries
- Nigerian Naira symbol (₦) at the bottom

## Design Elements

- **Colors**: Green theme matching the app (#2e7d32, #66bb6a)
- **Symbol**: Ledger book + Naira (₦) symbol
- **Style**: Clean, professional, fintech-focused

## Files Included

- `favicon.svg` - SVG version (works in modern browsers)
- `favicon.ico` - ICO version (for older browsers) - *To be generated*

## How to Generate ICO File

If you need a `.ico` file for better browser compatibility:

### Option 1: Online Converter
1. Go to https://convertio.co/svg-ico/ or https://favicon.io/
2. Upload `favicon.svg`
3. Convert to ICO format (32x32 and 16x16 sizes)
4. Download and save as `favicon.ico` in the trader-ledger folder

### Option 2: Using ImageMagick (Command Line)
```bash
# Install ImageMagick first
# Then run:
convert favicon.svg -resize 32x32 favicon.ico
```

### Option 3: Using GIMP
1. Open `favicon.svg` in GIMP
2. Export as ICO
3. Select multiple sizes: 16x16, 32x32, 48x48
4. Save as `favicon.ico`

## Browser Support

- **SVG Favicon**: Supported by Chrome, Firefox, Safari, Edge (modern versions)
- **ICO Favicon**: Fallback for older browsers and better compatibility

## Customization

To customize the favicon, edit `favicon.svg`:

1. **Change colors**: Modify the `fill` attributes
2. **Change symbol**: Replace the Naira symbol with another currency or icon
3. **Adjust design**: Modify the SVG paths and shapes

Example color changes:
```svg
<!-- Background -->
<circle cx="50" cy="50" r="48" fill="#YOUR_COLOR"/>

<!-- Book -->
<rect x="25" y="30" width="50" height="40" rx="2" fill="#YOUR_COLOR"/>
```

## Testing

After adding the favicon:
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh the page (Ctrl+F5)
3. Check the browser tab for the new icon
4. Test on different browsers

## Deployment

The favicon is automatically deployed with your application:
- Local: Available at `http://localhost:3000/favicon.svg`
- Production: Available at `https://your-domain.com/favicon.svg`

No additional configuration needed - it's referenced in all HTML files!
