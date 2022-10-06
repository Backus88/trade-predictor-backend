const { faker } = require('@faker-js/faker');

const registerBody = {
  email: faker.internet.email(),
  password: '12345',
  cep: faker.finance.pin(8),
  street: faker.address.street(),
  houseNumber: faker.finance.pin(3),
  complement: faker.address.streetAddress(),
  cpf: faker.finance.pin(11),
};

console.log(JSON.stringify(registerBody));
