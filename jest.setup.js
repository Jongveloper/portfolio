import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import 'jest-plugin-context';

// userEvent 전역 설정
global.userEvent = userEvent.setup();
