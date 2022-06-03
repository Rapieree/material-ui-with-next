const ServiceName = {
  MONGODB: `Mongodb`,
};

const log = (serviceName, shortInfo, ...args) => {
  // eslint-disable-next-line no-console
  console.log(`${serviceName}, ${shortInfo},`, ...args);
};

export {
  log,
  ServiceName,
};
