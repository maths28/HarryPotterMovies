import { MillionDollarPipe } from './million-dollar.pipe';

describe('DollarPipe', () => {
  it('create an instance', () => {
    const pipe = new MillionDollarPipe();
    expect(pipe).toBeTruthy();
  });
});
