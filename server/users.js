const users = []
export const addUser = ({ id, name, room }) => {
  name = name.trim().toLoverCase()
  room = room.trim().toLoverCase()
  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  )
  if (existingUser) {
    return { error: 'Username is already taken!!!' }
  }
  const user = { id, name, room }
  users.push(user)
  return user
}
export const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id)
  console.log({ index })
  if (index == !-1) {
    return users.splice(index, 1)[0]
  }
}
export const getUser = (id) => users.find((user) => user.id === id)
export const getUsersInRoom = (room) =>
  users.filter((user) => user.room === room)
