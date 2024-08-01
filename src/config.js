const dev = {
    API_URL: "https://portal.decodesales.in/api"
}

const prod = {
    API_URL: "/api"
}
const config = process.env.NODE_ENV == 'development' ? dev : prod
export default config