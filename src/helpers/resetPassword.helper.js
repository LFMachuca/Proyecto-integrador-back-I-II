import { transport } from "./email.helper.js"
const resetPassword = async (email) => {
        try {
            await transport.sendMail({            
                from:process.env.GOOGLE_EMAIL,
                to: email,
                subject: "PASSWORD RESET",
                html:`<h1>LINK PARA RESETEAR CONTRASEÑA </h1>
                <a href="http://localhost:8000/reset-pass/${email}">RESET PASSWORD</a>`})
        } catch (error) {
            throw(error)
        }
}
export default resetPassword