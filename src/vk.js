import fetchJsonp from 'fetch-jsonp'
import bridge from '@vkontakte/vk-bridge'

const groupId = -180174909
const appId = 7482412
const apiVersion = '5.103'

bridge.subscribe((e) => console.log(e))

// Отправляет событие нативному клиенту
bridge.send('VKWebAppInit', {})

export async function widgetPreview(data) {
  const body = data.slice(0, 10).map((user) => {
    const item = [
      {
        icon_id: 'id' + user.id,
        text: user.name,
      },
      {
        text: user.count,
      },
    ]
    return item
  })
  const result = await bridge.send('VKWebAppShowCommunityWidgetPreviewBox', {
    code: `return {
      "title": "Заголовок для виджета",
      "head": [
          {
              "text": "Пользователь"
          },
          {
              "text": "Лайки",
          }
      ],
      "body": ${JSON.stringify(body)}
  };`,
    type: 'table',
    group_id: 189385055,
  })
  .catch(er => console.log('Widget Error!', er))
  return result
}

/**
 * @deprecated However, the code might be usefull
 */
export async function getAppWidgetToken() {
  return await bridge
    .send('VKWebAppGetCommunityToken', {
      app_id: appId,
      group_id: 189385055,
      scope: 'app_widget',
    })
    .then((response) => response.access_token)
    .catch((ex) => console.log('Token Error!', ex))
}

const token =
  'fcd7d10dfcd7d10dfcd7d10da6fca5fd21ffcd7fcd7d10da21cf9e0cd6060f7bc952157'

export async function getUsersData(userIds) {
  let options = {
    v: apiVersion,
    access_token: token,
    user_ids: userIds,
  }
  const result = await callAPI('users.get', options)
  const red = result.reduce((accumulator, currentValue) => {
    accumulator.push({
      id: currentValue.id,
      name: currentValue.first_name + ' ' + currentValue.last_name,
    })
    return accumulator
  }, [])
  return red
}

export async function getWallPostsIds(count = 1) {
  let options = {
    v: apiVersion,
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
    v: apiVersion,
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
