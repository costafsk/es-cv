import render from './utils/render'

document.addEventListener('DOMContentLoaded', init())

function init () {
    render.init()

    for (const btn of document.querySelectorAll('.btn-remove')) {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            localStorage.removeItem(e.target.id)
            location.reload()
        })
    }

    document.querySelector('.btn-add').addEventListener('click', (e) => {
        e.preventDefault()

        let cpf = document.querySelector('#input-cpf').value
        let city = document.querySelector('#input-city').value
        let name = document.querySelector('#input-name').value
        let cv = document.querySelector('#cv').value

        localStorage.setItem(cpf.split('.').join('').split('-').join(''), JSON.stringify({
            name: name,
            cpf: cpf,
            city: city,
            cv: cv
        }))

        location.reload()
    })
}