import { MovieModel } from './movie.model';

describe('Movie', () => {
  it('should create an instance', () => {
    expect(new MovieModel()).toBeTruthy();
  });
});
