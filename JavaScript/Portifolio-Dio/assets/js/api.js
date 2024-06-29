//Fazer um fetch que que retorna uma promise

async function fetchProfileData(){
    const url = ''
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}