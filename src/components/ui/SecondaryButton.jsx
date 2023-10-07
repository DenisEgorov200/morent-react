export const SecondaryButton = ({ label, size }) => {
  let buttonSize = 'px-4 py-1 text-xs';

  if (size === 'small') {
    buttonSize = 'px-4 py-1 text-xs';
  } else if (size === 'medium') {
    buttonSize = 'px-4 py-2.5 text-xs';
  } else if (size === 'large') {
    buttonSize = 'px-4 py-3.5 text-base';
  }

  return (
    <button
      className={`border-[1px] border-secondary-300 font-semibold text-secondary-400 rounded ${buttonSize} hover:text-secondary-500 hover:bg-white hover:border-secondary-400 active:bg-primary-100 focus:border-secondary-300 focus:bg-white disabled:border-primary-100`}>
      {label}
    </button>
  );
};
