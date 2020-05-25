import * as vk from './vk'

let wallButton = document.getElementById('wallButton')

wallButton.addEventListener('click', async function () {
  const result = await vk.getWallPostsIds(30)
  const data = await handlePosts(result)
  createTable(data)
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
          id: user.id
        }
      } else {
        dict[user.id].count++
      }
    }
  }
  let items = Object.keys(dict).map(key => dict[key])
  items.sort((a, b) => b.count - a.count)
  return items
}

function createTable(data) {
  var k = '<tbody>'
  for (let i = 0; i < data.length; i++) {
    k += '<tr>'
    k += '<td>' + data[i].id + '</td>'
    k += '<td>' + data[i].name + '</td>'
    k += '<td>' + data[i].count + '</td>'
    k += '</tr>'
  }
  k += '</tbody>'
  document.getElementById('tableData').innerHTML = k
}
