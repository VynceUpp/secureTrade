import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66de1c080003d25e6068');

    export const account = new Account(client);

export default client;