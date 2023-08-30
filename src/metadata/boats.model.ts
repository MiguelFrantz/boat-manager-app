export interface BoatModel {
  code: string;
  name: string;
  status: "PENDING_REVIEW" | "REGISTERED";
  photo?: string;
  city: string;
  address: string;
  state: string;
  zip: number;
  category: string;
  engines: number;
  horsepower: number;
  length: number;
  boatMake: string;
  passengers: number;
  value: number;
  year: number;
}

export type BoatPreview = Pick<BoatModel, "code" | "name" | "status" | "photo">

export interface BoatListModel {
  list: BoatPreview[];
  totalItems: number;
}