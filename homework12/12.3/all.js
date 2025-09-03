document.querySelector(`button`).addEventListener(`click`, function() {
    const myInput = document.querySelector(`input`)
    const value = myInput.value.trim()
    if (!value) {
        return
    }

    const taskList = document.querySelector(`.task-list`)

    const newTask = document.createElement(`li`)

    newTask.textContent = value

    const deleteButton = document.createElement(`button`)

    deleteButton.textContent = `Delete`

    deleteButton.addEventListener(`click`, function() {
        newTask.remove()
    })

    newTask.appendChild(deleteButton)

    taskList.appendChild(newTask)

    myInput.value = ``
})