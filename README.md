# QI2501A Photo Gallery 📸

A local image gallery web application built with **Node.js**, **Express**, **Multer**, **Sharp**, and **Tailwind CSS**. This project allows users to upload images that are automatically converted to JPEG format and displayed in a responsive, modern photo gallery.

---

## Features ✨

- **Modern UI:** Beautiful gradient background with Tailwind CSS and a clean, professional layout.
- **Image Uploads:** Seamless image upload using Multer.
- **Automatic Image Conversion:** Uploaded images are converted to JPEG using Sharp.
- **Dynamic Gallery:** The gallery page reads from a local `images/` folder and displays the photos in a responsive grid.
- **Local Development:** All images are stored locally and not tracked by Git (thanks to `.gitignore`).

---

## Technologies & Libraries 🚀

- **Node.js** 🟢  
  JavaScript runtime environment used for building the backend.

- **Express** ⚡  
  Minimalist web framework for Node.js to handle server logic and endpoints.

- **Multer** 📤  
  Middleware for handling `multipart/form-data` (file uploads).

- **Sharp** 🖌️  
  High-performance image processing library to convert images to JPEG.

- **Tailwind CSS** 🎨  
  Utility-first CSS framework for modern UI styling (loaded via CDN).

- **Git** 🔧  
  Version control system with a configured `.gitignore` to keep the `images/` folder private.

---

## Getting Started 🏁

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v12 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes bundled with Node.js)

### Installation Steps

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd local-photogallery
