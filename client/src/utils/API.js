import axios from "axios"

export async function getAboutPageInfo(){
    return axios.get("/api/aboutInfo");
}
