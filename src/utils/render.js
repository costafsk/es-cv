module.exports = {
    init: () => {
        const feed = document.querySelector('aside')
        if (localStorage.length > 0) {
            const warning = document.querySelector('.sem-cv')

            if (warning !== null) warning.remove()

            for (const key of Object.keys(localStorage)) {
                cv = JSON.parse(localStorage.getItem(key))
    
                feed.innerHTML += `
                    <div class="alert alert-primary d-flex flex-column" role="alert">
                        <h4 class="alert-heading font-weight-bold">${cv.name}</h4>
                        <hr>
                        <strong>Description</strong>
                        <hr>
                        <p class="mb-0 font-weight-bold">${cv.cv}</p>
                        <hr>
                        <div class="d-flex align-items-center justify-content-between">
                            <h6 class="text-left font-weight-bold">${cv.cpf}</h6>
                            <h6 class="text-right font-weight-bold">${cv.city}</h6>
                        </div>
                        <button class="btn btn-outline-danger mt-4 btn-remove" id="${key}">Remover</button>
                    </div>`
            }
        } else {
            feed.innerHTML += `<h2 class="text-center font-weight-bold sem-cv text-secondary">Curriculos aqui!</h2>`
        }
    }
}