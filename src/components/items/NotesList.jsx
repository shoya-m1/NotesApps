import NotesItems from "./NotesItems";

export default function NotesList({
  notes,
  handleArchive,
  handleDelete,
  showFormattedDate,
}) 
{
  console.log(notes)
  return (
    <div className="notesItems flex flex-wrap gap-5 mt-5 justify-center">
      {notes.map(
        (note) => (
            <NotesItems
              key={note.id}
              {...note}
              date={showFormattedDate(note.createdAt)}
              onArcive={handleArchive}
              onDelete={handleDelete}
            ></NotesItems>
          )
      )}
    </div>
  );
}
