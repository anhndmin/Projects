import { IAlbum } from "./album.model";

export class IArtist {
  id: number
  name: string
  genres: any
  albums: IAlbum[]

}