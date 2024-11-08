function showSalary(users, age) {
  let arr = users.filter(item => item.age <= age);
  let usersMapped = arr.map(user => user.name + ', ' + user.balance);
  return usersMapped.join('\n')
}

