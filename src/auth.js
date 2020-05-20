const users = [
    { id: "kim@test.com", password: "123", name: "Kim" },
    { id: "lee@test.com", password: "456", name: "Lee" },
    { id: "park@test.com", password: "789", name: "Park" },
  ]
  
  export function signIn({ id, password }) {
    const user = users.find(
      (user) => user.id === id && user.password === password
    )
    if (user === undefined) throw new Error()
    return user
  }