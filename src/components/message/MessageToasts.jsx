export default function MessageToasts({ message, styling, status }) {
  return (
    <div
      className={`mt-3 border ${styling} rounded-lg shadow-lg bg-neutral-800 border-neutral-700`}
    >
      <div className="flex p-4">
        <div className="shrink-0">
          {status === "success" ? (
            <svg
              className="shrink-0 size-4 text-teal-500 mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
            </svg>
          ) : (
            <svg
              className="shrink-0 size-4 text-yellow-500 mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
            </svg>
          )}
        </div>
        <div className="ms-3">
          <p className="text-sm text-neutral-400">{message}</p>
        </div>
      </div>
    </div>
  );
}
