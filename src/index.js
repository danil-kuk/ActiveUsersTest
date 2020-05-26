import * as vk from './vk'

const wallButton = document.getElementById('wallButton')
const loader = document.getElementById('loader')

wallButton.addEventListener('click', async function () {
  wallButton.style.display = 'none'
  loader.style.display = 'block'
  const wallPostsIds = await vk.getWallPostsIds(30)
  const likesRating = await handlePosts(wallPostsIds)
  await vk.widgetPreview(likesRating)
  loader.style.display = 'none'
  wallButton.style.display = 'block'
})

async function handlePosts(data) {
  let dict = {}
  for (const postId of data) {
    const likes = await vk.getLikesFromPost(postId)
    const users = await vk.getUsersData(likes)
    for (const user of users) {
      if (dict[user.id] === undefined) {
        dict[user.id] = {
          name: user.name,
          count: 1,
          id: user.id,
        }
      } else {
        dict[user.id].count++
      }
    }
  }
  let items = Object.keys(dict).map((key) => dict[key])
  items.sort((a, b) => b.count - a.count)
  return items
}
