// server.js
const express = require("express");
const multer = require("multer");
const sharp = require("sharp"); // Image processing library
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Configure multer to use memory storage so we can process the file with sharp
const upload = multer({ storage: multer.memoryStorage() });

// Serve static files from the "public" folder (including index.html)
app.use(express.static(path.join(__dirname, "public")));

// Serve images statically at the "/images" path
app.use("/images", express.static(path.join(__dirname, "images")));

// API endpoint to list image URLs from the "images" folder
app.get("/api/images", (req, res) => {
  const imagesDir = path.join(__dirname, "images");
  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Error reading images folder" });
    }
    // Filter for valid image files (jpg, jpeg, png, gif)
    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );
    // Convert filenames to URLs (assuming they are served at /images)
    const imageUrls = imageFiles.map((file) => "/images/" + file);
    res.json(imageUrls);
  });
});

// Endpoint to handle file uploads via POST with conversion to JPEG using sharp
app.post("/upload", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  // Define file name and path – using a timestamp for a unique file name.
  const fileName = "image-" + Date.now() + ".jpg";
  const filePath = path.join(__dirname, "images", fileName);

  try {
    // Use sharp to convert the uploaded file (buffer) to a JPEG
    const jpegBuffer = await sharp(req.file.buffer)
      .jpeg() // Converts image to JPEG format
      .toBuffer();

    // Save the processed JPEG to the disk
    fs.writeFile(filePath, jpegBuffer, (err) => {
      if (err) {
        return res.status(500).send("Error saving file.");
      }
      // Redirect back to the homepage so the gallery is displayed
      res.redirect("/");
    });
  } catch (error) {
    res.status(500).send("Error processing file: " + error.message);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
