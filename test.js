const { faker } = require('@faker-js/faker');

const registerBody = {
  email: faker.internet.email(),
  password: faker.internet.password(10),
  cep: faker.finance.pin(8),
  street: faker.address.street(),
  houseNumber: parseInt(faker.finance.pin(3), 10),
  complement: faker.address.streetAddress(),
  cpf: faker.finance.pin(11),
};

console.log(registerBody);
