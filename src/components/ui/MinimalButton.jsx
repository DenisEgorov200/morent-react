export const MinimalButton = ({ label, size }) => {
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
      className={`font-semibold text-secondary-200 rounded ${buttonSize} hover:text-secondary-500 hover:bg-white active:bg-primary-100 focus:border-[1px] focus:border-secondary-200 disabled:text-secondary-400`}>
      {label}
    </button>
  );
};
