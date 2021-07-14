const axios = require('axios')

async function GetCheckDiri() {
    const { data } = await axios.get('https://cekdiri.id/vaksinasi/')
    const { monitoring, last_updated } = data 
    const latesData = monitoring[monitoring.length - 1]
    const { sasaran_vaksinasi_sdmk, vaksinasi1, vaksinasi2, total_sasaran_vaksinasi, sasaran_vaksinasi_lansia, sasaran_vaksinasi_petugas_publik } = latesData

    return {
        total_sasaran: total_sasaran_vaksinasi, 
        sasaran_vaksinasi_sdmk: sasaran_vaksinasi_sdmk, 
        sasaran_vaksinasi_lansia: sasaran_vaksinasi_lansia, 
        sasaran_vaksinasi_publik: sasaran_vaksinasi_petugas_publik, 
        vaksinasi1, 
        vaksinasi2, 
        lastUpdate: last_updated
    }
}

module.exports = {
    GetCheckDiri
}