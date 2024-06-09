import { Client, Account, Databases } from "appwrite";
import conf from "../conf/conf";

const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('66643bd1003d6c970924')

export const account = new Account(client)
export const database = new Databases(client, "66643e450033fd160bcc")

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      return await account.get();
    } catch (error) {
      return null;
    }
  }