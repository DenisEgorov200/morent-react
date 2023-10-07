import { MinimalButton } from './components/ui/MinimalButton.jsx';
import { PrimaryButton } from './components/ui/PrimaryButton.jsx';
import { SecondaryButton } from './components/ui/SecondaryButton.jsx';

export const App = () => {
  return (
    <>
      <h1>hello</h1>
      <PrimaryButton label="primary button" size="small" />
      <PrimaryButton label="primary button" size="medium" />
      <PrimaryButton label="primary button" size="large" />
      <MinimalButton label="minimal button" size="large" />
      <MinimalButton label="minimal button" size="medium" />
      <MinimalButton label="minimal button" size="small" />
      <SecondaryButton label="minimal button" size="large" />
      <SecondaryButton label="minimal button" size="medium" />
      <SecondaryButton label="minimal button" size="small" />
    </>
  );
};
