import '@testing-library/jest-dom';
import userEvent, { UserEvent } from '@testing-library/user-event';
import 'jest-plugin-context/setup';

declare global {
  // eslint-disable-next-line no-unused-vars
  function context(description: string, callback: () => void): void;

  interface Window {
    userEvent: UserEvent;
  }
}

(global as any).userEvent = userEvent.setup();
