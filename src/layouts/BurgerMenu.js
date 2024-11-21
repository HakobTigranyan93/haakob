function BurgerMenu({ onClick }) {
  return (
    <div onClick={onClick}>
      <svg
        width="28"
        height="20"
        viewBox="0 0 28 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2H26M2 10H26M2 18H26"
          stroke="#FEFEFE"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default BurgerMenu;
