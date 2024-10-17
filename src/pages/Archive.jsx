import NotesList from "../components/items/NotesList";

export default function Home({
  archivedNotes,
  handleArchive,
  handleDelete,
  showFormattedDate,
}) {
  return (
    <section className="min-h-screen mt-[25%] sm:mt-[17%] md:mt-[10%]">
      {archivedNotes.length === 0 && (
        <h2 className="text-white text-center text-xl">
          Tidak Ada Arsip Tersimpan
        </h2>
      )}
      <NotesList
        notes={archivedNotes}
        {...{ handleArchive, handleDelete, showFormattedDate }}
      />
    </section>
  );
}
