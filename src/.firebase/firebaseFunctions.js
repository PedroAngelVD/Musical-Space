import { db } from './firebaseConfig'

export async function arrayListMusic() {
  let arrayList = []
  const songs = await db.collection('list_music').get()
  await songs.forEach(function(song) {
    arrayList.push(song.data())
  })
  return arrayList
}
