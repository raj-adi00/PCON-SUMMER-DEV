// import conf from "../conf/conf";
// import { Client, Account, ID, Databases, Storage } from "appwrite"

// export class Service {
//     client = new Client();
//     databases;
//     bucket;
//     constructor() {
//         this.client
//             .setEndpoint(conf.appwriteUrl)
//             .setProject(conf.appwriteProjectId)
//         this.databases = new Databases(this.client)
//     }
//     async createleaderboard({ player, reting }) {
//         try {
//             return await this.databases.createDocument(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 ID.unique(),
//                 {
//                     player,
//                     reting
//                 }
//             )
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     async updateleaderboard(ID, rating) {
//         try {
//             return await this.databases.updateDocument(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 ID,
//                 {
//                     rating
//                 }
//             )

//         } catch (error) {
//             console.log(error)
//         }
//     }
// }