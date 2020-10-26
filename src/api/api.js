import * as axios from "axios";


const instance = axios.create({
    baseURL:`https://mandrillapp.com/api/1.0`,
    headers:{"Content-Type": "application/json","key":"aMh3G8DNtN9Jbc8JyPyClw"}})
const API_PATH = "http://localhost:3000/api/contact/mail.php";


export const messagesAPI = {
    sendMessage:(data)=>{

        return(
            instance.post('/messages/send.json', {
                "access-control-allow-credentials": false,
            "from_email": "pohui@mail.ru",
                "from_name": "pohui",
                "subject": "Hello",
                "to":{"email":"andrey_96qx@mail.ru"},
                "track_opens":true,
                "track_clicks":true,
                "text": "Testing some Mailgun awesomness!"})
                .then(response=>{
debugger;
                    return response.data
                })


                )


    },
}