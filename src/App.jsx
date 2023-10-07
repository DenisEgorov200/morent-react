import { MinimalButton } from './components/ui/MinimalButton.jsx';
import { PrimaryButton } from './components/ui/PrimaryButton.jsx';

export const App = () => {
  return (
    <>
      <h1>hello</h1>
      <PrimaryButton label="primary button" size="small" />
      <PrimaryButton label="primary button" size="medium" />
      <PrimaryButton label="primary button" size="large" />
      <MinimalButton />
    </>
  );
};
