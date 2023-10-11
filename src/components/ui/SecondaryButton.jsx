export const SecondaryButton = ({ label }) => {
  return (
    <button
      className={`border-[1px] border-secondary-300 font-semibold text-secondary-400 rounded hover:text-secondary-500 hover:bg-white hover:border-secondary-400 active:bg-primary-100 focus:border-secondary-300 focus:bg-white disabled:border-primary-100`}>
      {label}
    </button>
  );
};
