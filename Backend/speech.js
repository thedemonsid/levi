import express from "express";
import 'dotenv/config'
import cors from "cors";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API,
});

const app = express();
app.use(cors());
app.use(express.json()); // for parsing application/json

app.post("/api/question", async (req, res) => {
  const { question } = req.body;
  function generateStyledNotes(transcript) {
    const lines = transcript.split("\n");
    // Add Tailwind CSS classes to style the notes
    return ` 
        <div class="container mx-auto">
          <h1 class="text-3xl font-bold mb-4">Lecture Notes</h1>
          <p class="text-lg font-bold mb-2">Transcript:</p>
          <ul class="list-disc ml-4">
            ${lines.map((line) => `<li>${line}</li>`).join("")}
          </ul>
        </div>
    `;
  }
  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: question,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    const ans = generateStyledNotes(completion.choices[0].message.content);
    res.json({ answer: ans });
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ error: "Error processing question" });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
