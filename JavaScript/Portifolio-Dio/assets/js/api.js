//Fazer um fetch que que retorna uma promise

async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/eduardavieira-dev/Dio-Aprendizados/main/JavaScript/Portifolio-Dio/data/profile.json'
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}