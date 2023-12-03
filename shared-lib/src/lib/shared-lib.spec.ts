import { sharedLib } from './shared-lib';

describe('sharedLib', () => {
  it('should work', () => {
    expect(sharedLib()).toEqual('shared-lib');
  });
});
