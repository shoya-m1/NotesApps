import NotesList from "../components/items/NotesList";

export default function Home({
  activeNotes,
  handleArchive,
  handleDelete,
  showFormattedDate,
}) {
  return (
    <section className="min-h-screen mt-[25%] sm:mt-[17%] md:mt-[10%]">
      {activeNotes.length === 0 && (
        <h2 className="text-white text-center text-xl">
          Tidak Ada Catatan Tersimpan
        </h2>
      )}
      <NotesList
        notes={activeNotes}
        {...{ handleArchive, handleDelete, showFormattedDate }}
      />
    </section>
  );
}
