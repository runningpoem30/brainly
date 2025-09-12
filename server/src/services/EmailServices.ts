import nodemailer from "nodemailer"
import dotenv from "dotenv"
import { Url } from "url"
dotenv.config()


const transporter  = nodemailer.createTransport({
    host : "smtp.gmail.com",
    port : 465, 
    secure : true,
    auth: {
        user : process.env.SMTP_USER,
        pass : process.env.SMTP_PASS
    }
})

console.log(process.env.SMTP_USER)

export async function sendMail(receipient : any , subject:string , url:string){
    try{
        await transporter.sendMail({
            from : process.env.SMTP_USER,
            to : receipient,
            subject : subject,
            text : url
        })

        console.log("the mail is successfully sent ! ")
    }
    catch(err){
        console.log(err)
    }
}




// okay so now the transporter works , i have to basically create a fucntion now to help able to send emails to different users , ill call that function in the signup page 
// verify()

