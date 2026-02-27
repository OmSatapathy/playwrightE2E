import{test,expect} from '@playwright/test'
import { faker } from '@faker-js/faker';

test("generating email and all", async({})=>{

    const email = faker.internet.email()
    console.log(email)

   const username = faker.internet.username({firstName: 'Jeanne'})
   console.log(username)

   const pawd  =faker.internet.password()
   console.log(pawd)

  const zipcode = faker.location.city()
  console.log(zipcode)
})