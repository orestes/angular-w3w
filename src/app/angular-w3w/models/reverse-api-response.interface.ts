export interface ReverseApiResponse {
  'crs': {
    'type': string,
    'properties': {
      'href': string;
      'type': string;
    };
  };
  'words': string;
  'bounds': {
    'southwest': {
      'lng': number;
      'lat': number;
    };
    'northeast': {
      'lng': number;
      'lat': number;
    }
  };
  'geometry': {
    'lng': number;
    'lat': number;
  };
  'language': string;
  'map': string;
}
