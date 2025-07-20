import conf from '../conf/conf';
import {Client,Account,ID} from "appwrite";
//On changing the backend we just need to change this file.
export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
                    .setEndpoint(conf.appwriteUrl)
                    .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                //call another method
                return this.login({email,password});
            }
            else{
                return userAccount;
            }
        }
        catch(error){
            console.log("Appwrite service :: createAccount :: error", error);
        }

    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Appwrite service :: login :: error", error);
            throw error
        }
    }


    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error :: ",error);
            return false
        }

        return null;
    }

    async logout(){
        try {
            return this.account.deleteSessions();            
        } catch (error) {
            console.log("Appwrite service :: logout :: error :: ",error);
            
        }
    }
}

//so we thinking that when we AuthService() object is made then only client and account should be made.
// Since constructor is called by default so we will make methods in the constructor


const authService = new AuthService(); // Making an object so the methods can easily be accessible.
export default authService;
//Since it is a default export, you can import it under any name you choose 