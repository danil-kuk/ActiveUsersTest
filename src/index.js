import * as vk from './vk'

const mainForm = document.getElementById('main-form')
const loader = document.getElementById('loader')

mainForm.addEventListener('submit', function(e) {
  e.preventDefault()
  const groupId = mainForm['group-id'].value
  handleForm(groupId)
})

async function handleForm(groupId) {
  mainForm.style.display = 'none'
  loader.style.display = 'block'
  const wallPostsIds = await vk.getWallPostsIds(groupId, 50)
  const rating = await getMostActiveUsers(groupId, wallPostsIds)
  const userIds = rating.reduce((accumulator, elem) => [...accumulator, elem.id], [])
  const userData = await getReducedUserData(userIds)
  await vk.widgetPreview(rating, userData)
  loader.style.display = 'none'
  mainForm.style.display = 'block'
}

async function getMostActiveUsers(groupId, data) {
  const dict = {}
  for (const postId of data) {
    const userIds = await vk.getLikesFromPost(groupId, postId)
    for (const id of userIds) {
      if (dict[id] === undefined) {
        dict[id] = {
          count: 1,
          id: id
        }
      } else {
        dict[id].count++
      }
    }
  }
  const items = Object.keys(dict).map((key) => dict[key])
  items.sort((a, b) => b.count - a.count)
  return items.slice(0, 10)
}

async function getReducedUserData(userIds) {
  const userData = await vk.getUsersData(userIds)
  const reducedUserData = userData.reduce((accumulator, currentValue) => {
    accumulator[currentValue.id] = {
      id: currentValue.id,
      name: currentValue.first_name + ' ' + currentValue.last_name
    }
    return accumulator
  }, {})
  return reducedUserData
}