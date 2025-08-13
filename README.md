# 2048 Drop

## 🚀 Setup & Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Open the local URL shown in your terminal to play and develop.

### Build for Production
```bash
npm run build
```
The output will be in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```
This serves the built files locally for testing.

---

## 🧩 Game Genre
Casual, Physics-based Puzzle, Arcade

## 🕹️ Platform

## 🎥 Game Overview
“2048 Drop” is a physics-based number puzzle game where the player drops numbered balls into a container. When two balls of the same value collide, they merge into one ball of the next power of 2. The goal is to reach the tile **2048** or achieve the **highest score** before the container overflows.

## 🧠 Core Gameplay Mechanics
### 🎯 Objective
- Merge balls to reach the highest number possible (2048+)
- Prevent the container from overflowing

## ⚙️ Controls
| Platform | Input |
| --- | --- |
| Desktop | Click to drop ball at cursor X position |
| Mobile | Tap to drop ball at finger X position |

## 🧮 Scoring System
| Action | Points |
| --- | --- |
| Merge 2 | 4 |
| Merge 4 | 8 |
| Merge 8 | 16 |
| … | n * 2 |

## 📐 Technical Details
| Feature | Tool/Library |
| --- | --- |
| Engine | Phaser 3.88 |
| Physics Engine | Matter.js (built-in) |
| Renderer | WebGL (with Canvas fallback) |
| Framework | Vite + TypeScript |
