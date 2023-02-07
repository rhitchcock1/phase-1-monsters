fetch (" http://localhost:3000/monsters/?_limit=50&_page2")
.then(response => response.json())
.then(monsters => renderMonsters(monsters))

const monsterFormHolder = document.getElementById('create-monster')
const monsterForm = document.createElement("form")
console.log(monsterFormHolder)
monsterFormHolder.append(monsterForm)

const inputName = document.createElement("input")
inputName.type = "text"
inputName.name = "name"
inputName.placeholder = "Monster Name"

const br = document.createElement("br")

const inputAge = document.createElement("input")
inputAge.type = "number"
inputAge.name = "age"
inputAge.placeholder = "Monster Age"


const inputDescription = document.createElement("input")
inputDescription.type = "text"
inputDescription.name = "description"
inputDescription.placeholder = "Monster Description"


const submitBttn = document.createElement("button")
submitBttn.type = "submit"
submitBttn.name = "submit"
submitBttn.textContent = "Create Monster"
monsterForm.append(inputAge,inputDescription,inputName, submitBttn)


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


