// import conf from "../conf/conf";
// import { Client, Account, ID } from "appwrite"


import { account } from "./Appwrite";

// export class Authservice {
//     Client = new Client();
//     account;
//     constructor() {
//         this.Client
//             .setEndpoint(conf.appwriteUrl)
//             .setProject(conf.appwriteProjectId)
//         this.account = new Account(this.Client)
//     }
//     async createAccount({ email, password, name }) {
//         try {
//             const userAccount = await this.account.create(ID.unique(), email, password, name)
//             if (userAccount) {
//                 // call another method
//                 return this.login({ email, password })
//             }
//             else {
//                 return;
//             }
//         }
//         catch (error) {
//             throw error

//         }
//     }
//     async login({ email, password }) {
//         try {
//             return await this.account.createEmailSession(email, password);
//         }
//         catch (error) {
//             throw error;
//         }
//     }
//     async getCurrentUser() {
//         try {
//             return await this.account.get();
//         }
//         catch (error) {
//             console.log(error)
//         }
//         return null
//     }
//     async logoout() {
//         try {
//             await this.account.deleteSessions()
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }

// const authservice = new Authservice()
// export default authservice
export async function deletecurrentsession(){
    await account.deleteSession('current')
}