import fetchMock from 'fetch-mock';
import { basePath } from '../configs';
import { BoatListModel, BoatPreview, BoatModel } from '~metadata/boats.model';

const delay = 500;

const boats: BoatPreview[] = [
  {
    code: '123asdf',
    name: 'Boat 01',
    status: 'PENDING_REVIEW'
  }, {
    code: '321fdsa',
    name: 'Boat 02',
    status: 'REGISTERED'
  }, {
    code: 'f1d2s3a',
    name: 'Boat 03',
    status: 'REGISTERED'
  }
]

const boat01: BoatModel = {
  code: '123asdf',
  name: 'Boat 01',
  status: 'PENDING_REVIEW',
  city: 'Miami',
  address: 'Streetname 10',
  state: 'Florida',
  zip: 33101,
  category: 'Miami',
  engines: 2,
  horsepower: 150,
  length: 24,
  boatMake: 'Suntracker',
  passengers: 10,
  value: 50000.00,
  year: 2023,
}

const enableBoatsMock = () => {
  fetchMock.mock({
    url: `${basePath}/boats`,
    delay,
    method: 'GET',
    response: (): BoatListModel => ({
      totalItems: boats.length,
      list: boats
    })
  });

  fetchMock.mock({
    url: `glob:${basePath}/boats/*`,
    delay,
    method: 'GET',
    response: (): BoatModel => boat01
  });
}

export { enableBoatsMock }