import SibApiV3Sdk from "@sendinblue/client"
import dotenv from "dotenv"

dotenv.config()
const defaultClient = new  SibApiV3Sdk.TransactionalEmailsApi();

// const apiKey = defaultClient.api['api-key']
// apiKey.apiKey = process.env.BREVO_API 

defaultClient.apiClient