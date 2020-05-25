import * as vk from './vk'
import bridge from '@vkontakte/vk-bridge'

let testButton = document.getElementById('testButton')
let wallButton = document.getElementById('wallButton')


testButton.addEventListener('click', async function () {
  bridge.send('VKWebAppGetCommunityToken', {
    app_id: 7482412,
    group_id: 189385055,
    scope: 'app_widget',
  })
  testButton.style.display = 'none'
  wallButton.style.display = 'block'
})

wallButton.addEventListener('click', async function () {
  const result = await vk.getWallPostsIds(30)
  const data = await handlePosts(result)
  vk.sendWidget(data)
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