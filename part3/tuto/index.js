const http = require("http");

const express = require("express");
const app = express();

app.use(express.json());

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true,
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: true,
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

const generateId = () => {
  const maxId =
    notes.length > 0 ? Math.max(...notes.map((n) => Number(n.id))) : 0;
  return String(maxId + 1);
};

app.get("/", (request, response) => {
  response.send("<h1>Hello Jim!</h1>");
});

app.get("/api/notes/:id", (requests, response) => {
  const id = requests.params.id;
  const note = notes.find((note) => note.id === id);

  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

app.get("/api/notes", (request, response) => {
  response.json(notes);
});

// --- DELETE ---
app.delete("/api/notes/:id", (request, response) => {
  const id = request.params.id;

  notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

// --- POST ---
app.post("/api/notes", (req, res) => {
  const body = req.body;

  if (!body.content) {
    return res.status(400).json({
      error: "content missing",
    });
  }

  const note = {
    content: body.content,
    important: Boolean(body.important) || false,
    id: generateId(),
  };

  notes = notes.concat(note);

  res.json(note);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
