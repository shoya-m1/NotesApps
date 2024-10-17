import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getInitialData, showFormattedDate } from "./utils";
import { useState, useEffect } from "react";

import Navbar from "./components/navbars/Navbar";
import Home from "./pages/Home";
import AddNote from "./pages/AddNote";
import Arcive from "./pages/Archive";
import Footer from "./components/footers/Footer";

export default function App() {
  const [data, setData] = useState(getInitialData());
  const [notes, setNotes] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");

  const addNote = (newNote) => {
    setData((prevData) => [...prevData, newNote]);
  };

  const handleArchive = (id) => {
    setData((prevData) =>
      prevData.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((note) => note.id !== id));
  };

  useEffect(() => {
    handleSearch(searchQuery);
  }, [data, searchQuery]);

  const handleSearch = (query) => {
    setNotes(() =>
      data.filter((prevData) =>
        prevData.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const onChangeSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchQuery(value);
    handleSearch(value);
  };

  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <Router>
      <Navbar {...{ onChangeSearch }} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              {...{
                activeNotes,
                notes,
                handleArchive,
                handleDelete,
                showFormattedDate,
              }}
            />
          }
        ></Route>
        <Route path="/addNote" element={<AddNote {...{ addNote }} />}></Route>
        <Route
          path="/archive"
          element={
            <Arcive
              {...{
                archivedNotes,
                handleArchive,
                handleDelete,
                showFormattedDate,
              }}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}
