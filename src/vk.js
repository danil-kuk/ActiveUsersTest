import fetchJsonp from 'fetch-jsonp'
import bridge from '@vkontakte/vk-bridge'

// Отправляет событие нативному клиенту
bridge.send('VKWebAppInit', {})

const token =
  'fcd7d10dfcd7d10dfcd7d10da6fca5fd21ffcd7fcd7d10da21cf9e0cd6060f7bc952157'

const groupId = -180174909

export async function getUsersData(userIds) {
  let options = {
    v: '5.103',
    access_token: token,
    user_ids: userIds,
  }
  const result = await callAPI('users.get', options)
  const red = result.reduce((accumulator, currentValue) => {
    accumulator.push({
      id: currentValue.id,
      name: currentValue.first_name + ' ' + currentValue.last_name
    })
    return accumulator
  }, [])
  return red
}

export async function getWallPostsIds(count = 1) {
  let options = {
    v: '5.103',
    access_token: token,
    count: count,
    owner_id: groupId,
  }
  const response = await callAPI('wall.get', options)
  const reduce = response.items.reduce(
    (accumulator, currentValue) => [...accumulator, currentValue.id],
    []
  )
  return reduce
}

export async function getLikesFromPost(postId) {
  let options = {
    v: '5.103',
    access_token: token,
    owner_id: groupId,
    type: 'post',
    item_id: postId,
    extended: 0,
  }
  const response = await callAPI('likes.getList', options)
  return response.items
}

async function callAPI(method, options) {
  const querry = new URLSearchParams(options).toString()
  const request = `https://api.vk.com/method/${method}?${querry}`
  const response = await fetchJsonp(request)
  const json = await response.json()
  return json.response
}
