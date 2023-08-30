import fetchMock from 'fetch-mock'
import { enableBoatsMock } from './boats.mock';

const enableMock = () => {
  enableBoatsMock();
  fetchMock.config.fallbackToNetwork = true;
}

const disableMock = () => {
  fetchMock.reset();
}

export { enableMock, disableMock }