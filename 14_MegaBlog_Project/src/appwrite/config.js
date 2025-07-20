import conf from '../conf/conf';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket; //storage

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client);

    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionsId, slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                })

        } catch (error) {
            console.log("Appwrite Storage Service :: createPost :: error :: ", error);

        }
    }

    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionsId, slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                })
        } 
        catch (error) {
            console.log("Appwrite Storage Service :: updatePost :: error :: ", error);
            
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionsId,slug)
            return true
        } catch (error) {
            console.log("Appwrite Storage Service :: deletePost :: error :: ", error);
            return false
            
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionsId,slug)
        } catch (error) {
            console.log("Appwrite Storage Service :: getPost :: error :: ", error);
        }
    }

    async listPosts(queries = [ Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionsId,queries)
            
        } catch (error) {
            console.log("Appwrite Storage Service :: listPosts :: error :: ", error);            
            return false
        }

    }//In listsPost, we have used query to get only the posts with 'active' status.
    // 'queries' is a variable

    //FILE UPLOAD SERVICES

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Storage Service :: uploadFile :: error :: ", error);
            return false
        }
        
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(conf.appwriteBucketID,fileId)
        } catch (error) {
            console.log("Appwrite Storage Service :: deleteFile :: error :: ", error);
            return false
        }
    }//Here file id will be the id returned from uploadFile which will also be used in featuredImage.

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketID,
            fileId
        )
    }
}


const services = new Service();
export default services;
//Since it is a default export, you can import it under any name you choose 