export default function HamburgerMenu() {
  return (
    <label className="hamburger cursor-pointer">
      <input className="hidden" type="checkbox" />
      <svg viewBox="0 0 32 32" className="h-[2.5em] ease-in-out duration-300">
        <path
          className="line line-top-bottom"
          d="M27 10L13 10C10.8 10 9 8.2 9 6C9 3.5 10.8 2 13 2C15.2 2 17 3.8 17 6V26C17 28.2 18.8 30 21 30C23.2 30 25 28.2 25 26C25 23.8 23.2 22 21 22L7 22"
        ></path>
        <path className="line" d="M7 16L27 16"></path>
      </svg>
    </label>
  );
}
