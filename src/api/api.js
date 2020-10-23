import * as axios from "axios";


const instance = axios.create({withCredentials:true,
    baseURL:`https://api.mailopost.ru/v1`,
    headers:{"Content-Type":"multipart/form-data","Authorization":"Bearer 4f69673240a17e982455e9ecef03e5e3"}})


export const messagesAPI = {
    sendMessage:(text,from_email="alice@example.org", from_name="Alice", to ="andrey_96qx@mail.ru")=>{
        debugger;
        return(
            instance.post('/email/messages', {
                from_email:from_email,
                from_name: from_email,
                to: to,
                subject: "Hello",
                text: "text",
                html: "<h1>Hello, Bob!</h1>",
                payment: "credit"
            })
                .then(response=>{
debugger;
                    return response.data
                }))

    },
}