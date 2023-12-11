import { ImageInterface } from "./imageInterface";

export interface UsersPlaylistsInterface {
  items: [
    {
      collaborative: Boolean;
      description: String;
      external_urls: { spotify: String };
      href: String;
      id: String;
      images:Array<ImageInterface>;
      name: String;
      owner: {
        external_urls: { spotify: String };
        followers: { href: String; total: Number };
        href: String;
        id: String;
        type: String;
        uri: String;
        display_name: String;
      };
      public: Boolean;
      snapshot_id: String;
      tracks: { href: String; total: Number };
      type: String;
      uri: String;
    }
  ];
}
