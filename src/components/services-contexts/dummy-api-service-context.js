import React from 'react';

const {
  Provider: DummyApiServiceProvider,
  Consumer: DummyApiServiceConsumer
} = React.createContext();

export {
  DummyApiServiceProvider,
  DummyApiServiceConsumer
};