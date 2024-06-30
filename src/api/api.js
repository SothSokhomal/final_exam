import PocketBase from '../lib/pocketbase.es.mjs'

const url = 'https://skill-canal.pockethost.io/'
const client = new PocketBase(url)

async function getAllPets() {
  const records = await client.collection('pets').getFullList()
  return records
  
}

async function getOnePet(id) {
  const record = await client.collection('pets').getOne(id)
  return record
}

async function addNewPet(data) {
  const record = await client.collection('pets').create(data)
  return record
}

export {
  url,
  getAllPets,
  addNewPet,
  getOnePet
}