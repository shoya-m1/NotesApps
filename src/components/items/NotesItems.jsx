export default function NotesItems({
  id,
  title,
  body,
  archived,
  onArcive,
  onDelete,
  date,
}) {
  return (
    <>
      <div className="md:w-96 p-5 w-3/4 border-2 border-neutral-800 bg-neutral-900 rounded-xl shadow-md">
        <b className="text-white font-poppins text-xl sm:text-2xl">{title}</b>
        <p className="text-stone-200 text-[13px] sm:text-[14px] mt-4 h-36 ">
          {body}
        </p>
        <div className="flex justify-between h-12 items-center border-t-2 border-neutral-700 mt-2 flext-wrap">
          <ul className="flex font-poppins text-stone-400 gap-3 text-[13px] sm:text-[16px]">
            <li
              className="text-red-500 cursor-pointer hover:text-red-400 ease-in-out duration-300"
              onClick={() => onDelete(id)}
            >
              Delete
            </li>
            <li
              className="text-yellow-500 cursor-pointer hover:text-yellow-400 ease-in-out duration-300"
              onClick={() => onArcive(id)}
            >
              {archived ? "UnArcive" : "Arcive"}
            </li>
          </ul>
          <span className="text-stone-400 font-poppins text-[12px] sm:text-[15px]">
            {date}
          </span>
        </div>
      </div>
    </>
  );
}
