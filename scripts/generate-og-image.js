/**
 * Generate OG preview image (1200x630 PNG)
 * 
 * Usage:
 *   npx playwright install chromium   (one-time)
 *   node scripts/generate-og-image.js
 * 
 * Or manually:
 *   1. Open scripts/generate-og-image.html in a browser
 *   2. Use DevTools → Device toolbar → set 1200×630
 *   3. Screenshot the .card element
 *   4. Save as public/og-preview.png
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = resolve(__dirname, 'generate-og-image.html');
const outputPath = resolve(__dirname, '..', 'public', 'og-preview.png');

async function generateWithPlaywright() {
  const { chromium } = await import('playwright');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.goto(`file://${htmlPath}`);
  
  const card = await page.locator('.card');
  await card.screenshot({ path: outputPath });
  
  await browser.close();
  console.log(`✓ OG image saved to: ${outputPath}`);
}

async function main() {
  try {
    await generateWithPlaywright();
  } catch (e) {
    console.log('Playwright not found. Trying to install...');
    try {
      execSync('npx playwright install chromium', { stdio: 'inherit' });
      await generateWithPlaywright();
    } catch {
      console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('Auto-generation failed. Manual steps:');
      console.log('1. Open scripts/generate-og-image.html in Chrome');
      console.log('2. Press F12 → Toggle device toolbar (Ctrl+Shift+M)');
      console.log('3. Set dimensions to 1200 × 630');
      console.log('4. Right-click the card → Capture node screenshot');
      console.log('5. Save as public/og-preview.png');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    }
  }
}

main();
