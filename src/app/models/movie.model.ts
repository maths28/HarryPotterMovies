export interface Movie {
  "id": string,
  "title": string,
  "duration": number,
  "budget": string,
  "release_date": string,
  "box_office": number,
  "cinematographers": string[],
  "poster": string,
  "producers": string,
  "summary": string;
}

export type ResumeMovie = Pick<Movie, "id"|"title"|"duration"|"budget"|"release_date">;
