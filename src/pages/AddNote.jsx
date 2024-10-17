import { useState } from "react";
import MessageToasts from "../components/message/MessageToasts";

export default function AddNote({ addNote }) {
  const [inputValue, setInputValue] = useState({
    title: "",
    body: "",
  });
  const [lengthText, setLengthText] = useState(0);
  const [messageMaxText, setMessageMaxText] = useState(false);
  const [messageEmptyText, setMessageEmptyText] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);

  const maxText = 50;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "title") {
      if (value.length <= maxText) {
        setInputValue((prevValue) => ({
          ...prevValue,
          [name]: value,
        }));
        setLengthText(value.length);
        setMessageMaxText(value.length >= maxText);
      }
    } else {
      setInputValue((prevValue) => ({
        ...prevValue,
        [name]: value,
      }));
    }

    setMessageEmptyText(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.title.trim() === "" || inputValue.body.trim() === "") {
      setMessageEmptyText(true);
      return;
    }

    const newNote = {
      id: +new Date(),
      title: inputValue.title,
      body: inputValue.body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    setMessageSuccess(true);
    setTimeout(() => {
      setMessageSuccess(false);
    }, 5000);

    addNote(newNote);
    setInputValue({ body: "", title: "" });
    setLengthText(0);
  };

  return (
    <div className="mt-[20%] sm:mt-[15%] md:mt-[10%] lg:mt-[8%]">
      <h1 className="text-white pt-6 text-bold text-3xl font-bold font-poppins text-center">
        Tambahkan Catatan Baru
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full flex flex-col justify-center gap-5 items-center"
      >
        <div className="w-3/4 lg:w-1/2">
          <p className="text-stone-500 text-sm w-full text-end">
            <i>
              Maximal Text : {lengthText}/{maxText}
            </i>
          </p>
          <input
            name="title"
            type="text"
            value={inputValue.title}
            onChange={handleInputChange}
            className="w-full mt-1 placeholder:italic placeholder:text-neutral-700 block bg-bgBlack border border-neutral-700 text-neutral-400 rounded-lg py-[12px] pl-5 pr-3 shadow-sm focus:outline-none focus:border-yellow-600 focus:ring-yellow-500 focus:ring-1 ease-out duration-300 text-[16px]"
            placeholder="Judul Catatan"
          />
          {messageMaxText && (
            <MessageToasts
              message="Maximal Text 50 Karakter"
              styling="max-w-xs absolute translate-x-1/2"
              status="warning"
            />
          )}
        </div>
        <div className="w-3/4 lg:w-1/2">
          <textarea
            name="body"
            className="w-full mt-1 placeholder:italic placeholder:text-neutral-700 block bg-bgBlack border border-neutral-700 text-neutral-400 rounded-lg py-[12px] pl-5 pr-3 shadow-sm focus:outline-none focus:border-yellow-600 focus:ring-yellow-500 focus:ring-1 ease-out duration-300 text-[16px]"
            rows="5"
            onChange={handleInputChange}
            value={inputValue.body}
            placeholder="Isi Catatan . . ."
          />
          {messageEmptyText && (
            <MessageToasts
              message="Input tidak boleh kosong"
              styling="max-full"
              status="warning"
            />
          )}
          {messageSuccess && (
            <MessageToasts
              message="Catatan berhasil dibuat"
              styling="max-full"
              status="success"
            />
          )}
        </div>
        <button className="text-stone-300 bg-neutral-900 font-semibold border border-1 border-stone-700 rounded-lg py-2 w-1/2 md:w-1/4 text-[16px] hover:bg-yellow-600 hover:text-white transition-all duration-300 ease-in-out">
          Tambah
        </button>
      </form>
    </div>
  );
}
