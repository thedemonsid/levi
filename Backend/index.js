import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import sharp from "sharp";

const app = express();

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(bodyParser.json({ limit: "10mb" }));

app.post("/images", async (req, res) => {
  try {
    const imageData = req.body.image;
    const base64Data = imageData.replace(/^data:image\/jpeg;base64,/, "");
    fs.writeFileSync("image.jpeg", base64Data, "base64");

    // Process the image (e.g., resize the image to 200x200 pixels)
    await sharp("image.jpeg").resize(200, 200).toFile("output.jpeg");

    // Send a response back to the client
    res.json({ message: "Image received and processed" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the image" });
  }
});

app.listen(5000, () => console.log("Server is running on port 5000"));
