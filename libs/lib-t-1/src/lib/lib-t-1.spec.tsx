import { render } from '@testing-library/react';

import LibT1 from './lib-t-1';

describe('LibT1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibT1 />);
    expect(baseElement).toBeTruthy();
  });
});
