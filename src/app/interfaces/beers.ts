export interface IBeers {
  abv: number;
  attenuation_level: number;
  boil_volume: {
    value: number,
    unit: string
  };
  brewers_tips: string;
  contributed_by: string;
  description: string;
  ebc: number;
  first_brewed: string;
  food_pairing: Array<string>;
  ibu: number;
  id: number;
  image_url: number;
  ingredients: {
    malt: Array<object>,
    hops: Array<object>,
    yeast: string
  };
  method: any;
  name: string;
  ph: number;
  srm: number;
  tagline: string;
  target_fg: number;
  target_og: number;
  volume: {
    value: number,
    unit: string
  };
}
