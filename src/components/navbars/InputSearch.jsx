export default function InputSearch({ onChangeSearch, isAddNotePage }) {
  return (
    <div className="w-[80%] ml-6 sm:ml-0 sm:w-full">
      {!isAddNotePage && (
        <label className="relative block">
          <span className="absolute inset-y-0 mt-1 left-0 flex items-center pl-2">
            <svg
              className="text-neutral-500"
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M18.319 14.433A8.001 8.001 0 0 0 6.343 3.868a8 8 0 0 0 10.564 11.976l.043.045l4.242 4.243a1 1 0 1 0 1.415-1.415l-4.243-4.242zm-2.076-9.15a6 6 0 1 1-8.485 8.485a6 6 0 0 1 8.485-8.485"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <input
            onChange={onChangeSearch}
            className="placeholder:italic placeholder:text-neutral-700 block bg-bgBlack w-full border border-neutral-700 text-neutral-400 rounded-lg py-[12px] pl-9 pr-3 shadow-sm focus:outline-none focus:border-neutral-600 text-[16px]"
            placeholder="Search . . . "
            type="text"
            name="search"
          />
        </label>
      )}
    </div>
  );
}
