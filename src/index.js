import * as vk from './vk'

const mainForm = document.getElementById('main-form')
const loader = document.getElementById('loader')

mainForm.addEventListener('submit', function (e) {
  e.preventDefault()
  const groupId = mainForm['group-id'].value
  handleForm(groupId)
})

async function handleForm(groupId) {
  mainForm.style.display = 'none'
  loader.style.display = 'block'
  const wallPostsIds = await vk.getWallPostsIds(groupId, 30)
  const likesRating = await handlePosts(groupId, wallPostsIds)
  await vk.widgetPreview(likesRating)
  loader.style.display = 'none'
  mainForm.style.display = 'block'
}

async function handlePosts(groupId, data) {
  let dict = {}
  for (const postId of data) {
    const likes = await vk.getLikesFromPost(groupId, postId)
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
