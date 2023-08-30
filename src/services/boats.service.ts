import { basePath } from "../configs";
import { BoatListModel, BoatModel } from "~metadata/boats.model";

const listBoats = async (): Promise<BoatListModel> => {
  const response = await fetch(`${basePath}/boats`, {
    method: 'GET'
  })

  if (!response.ok) {
    throw new Error('It was not possible to load the boats list');
  }

  return (await response.json()) as BoatListModel;
}

const getBoat = async (boatId: string): Promise<BoatModel> => {
  const response = await fetch(`${basePath}/boats/${boatId}`, {
    method: 'GET'
  })

  if (!response.ok) {
    throw new Error('It was not possible to load the boat');
  }

  return (await response.json()) as BoatModel;
}

const createBoat = async (boat: BoatModel): Promise<BoatModel> => {
  const response = await fetch(`${basePath}/boats`, {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(boat)
  })

  if (!response.ok) {
    throw new Error('It was not possible to create the boat');
  }

  return (await response.json()) as BoatModel;
}

const updateBoat = async (boat: Partial<BoatModel>): Promise<BoatModel> => {
  const response = await fetch(`${basePath}/boats`, {
    method: 'GET',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(boat)
  })

  if (!response.ok) {
    throw new Error('It was not possible to update the boat');
  }

  return (await response.json()) as BoatModel;
}

const deleteBoat = async (boatId: string): Promise<BoatModel> => {
  const response = await fetch(`${basePath}/boats/${boatId}`, {
    method: 'DELETE'
  })

  if (!response.ok) {
    throw new Error('It was not possible to delete the boat');
  }

  return (await response.json()) as BoatModel;
}

export { listBoats, getBoat, createBoat, updateBoat, deleteBoat }