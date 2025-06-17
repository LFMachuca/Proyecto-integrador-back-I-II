import { createTransport } from "nodemailer";

const transport = createTransport(
{   host:"smtp.gmail.com",
    port: 465,
    secure: true,
    auth:{
        user:process.env.GOOGLE_EMAIL,
        pass:process.env.GOOGLE_PASSWORD
    }
})

const sendEmailHelper = async (email) => {
    try {
        await transport.sendMail({
            from:process.env.GOOGLE_EMAIL,
            to: email,
            subject: "MAIL DE PRUEBA",
            html:"<h1>CORREO DE PRUEBA CON NODE MAILES</h1>"
        })
    } catch (error) {
        throw(error);
        
    }
}
export {transport};
export default sendEmailHelper;