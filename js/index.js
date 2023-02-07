fetch (" http://localhost:3000/monsters/?_limit=50&_page2")
.then(response => response.json())
.then(monsters => renderMonsters(monsters))

const monsterFormHolder = document.querySelector("#create-monster")
const monsterForm = document.createElement("form")
//monsterFormHolder.classname = 'monster-form'
const inputName = document.createElement("input")
inputName.type = "text"
inputName.name = "name"
inputName.placeholder = "Monster Name"
inputName.append(monsterForm)
const br = document.createElement("br")
br.append(monsterForm)
const inputAge = document.createElement("input")
inputAge.type = "number"
inputAge.name = "age"
inputAge.placeholder = "Monster Age"
inputAge.append(monsterForm)
br.append(monsterForm)
const inputDescription = document.createElement("input")
inputDescription.type = "text"
inputDescription.name = "description"
inputAge.placeholder = "Monster Description"
inputDescription.append(monsterForm)
br.append(monsterForm)
const submitBttn = document.createElement("button")
submitBttn.type = "submit"
submitBttn.name = "submit"
submitBttn.value = "Create Monster"
submitBttn.append(monsterForm)

monsterFormHolder.append(monsterForm)
  monsterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
})



//page loads show 50 monsters
function renderMonsters(monsters){
    monsters.forEach((monster) => {
    const monsterBody = document.querySelector("#monster-container")
    const monsterCage = document.createElement('div')
    const h2 = document.createElement('h2')
    h2.textContent = monster.name
    monsterCage.append(h2)
    const h3 = document.createElement('h3')
    h3.textContent ="Age:" +  Math.floor(monster.age)
    monsterCage.append(h3)
    const p = document.createElement('p')
    p.textContent = monster.description
    monsterCage.append(p)


    
    monsterBody.append(monsterCage)
    }
  )

}


