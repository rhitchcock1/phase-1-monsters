fetch (" http://localhost:3000/monsters/?_limit=50&_page2")
.then(response => response.json())
.then(monsters => renderMonsters(monsters))

const monsterForm = document.querySelector("#monster-form")
  monsterForm.addEventListener("submit", (e) => {
    console.log(test)
  e.preventDefault();
  console.log(test)
  
})
//const monsterDiv = document.createElement("div")

//page loads show 50 monsters
function renderMonsters(monsters){
    monsters.forEach((monster) => {
    const monsterBody = document.querySelector("body")  
    const monsterCage = document.createElement('div')
    const h2 = document.createElement('h2')
    h2.textContent = monster.name
    monsterCage.append(h2)
    const h3 = document.createElement('h3')
    h3.textContent = Math.floor(monster.age)
    monsterCage.append(h3)
    const p = document.createElement('p')
    p.textContent = monster.description
    monsterCage.append(p)


    
    monsterBody.append(monsterCage)
    }
  )
  
}

// const monsterForm = document.querySelector("#monster-form")
//   monsterForm.addEventListener("submit", (e) => {
//     console.log(test)
//   e.preventDefault();
//   console.log(test)
  
// })
