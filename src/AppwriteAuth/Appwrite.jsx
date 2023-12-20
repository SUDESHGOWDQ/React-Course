import { Client,Account } from 'appwrite';
const client=new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6566f2a96b974e36d019');

export const account=new Account(client);
