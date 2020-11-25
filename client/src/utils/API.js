import axios from "axios"

export async function getAboutPageInfo(){
    return axios.get("/api/aboutInfo");
}
export async function getCodePage(){
    return axios.get("/api/coding");
}
export async function getPortfolio(cat){
    return axios.get("/api/portfolio/"+cat);
}
export async function getMusicPage(){
    return axios.get("/api/music");
}