const toggleElement = document.getElementById('toggle-menu')
const formElement  = document.getElementById('form')
const inputElement = document.getElementById('input')
const menuElement = document.getElementById('menu')
const errorElement = document.getElementById('error')
const linkElement = document.querySelector('.sc-section')
const rootStyles = document.documentElement.style




toggleElement.addEventListener('click' , (e)=>{
    toggleElement.classList.toggle('menu__close')
    menuElement.classList.toggle('show')
})


const validateUrl = (url) =>{
    const urlRegEx = /https?:\/\/(www.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/
    if(urlRegEx.test(url)){
        if(errorElement.classList.contains('error-show')){
            errorElement.classList.remove('error-show')
            inputElement.classList.remove('input-error')
        }

        
        
        
        
        linkElement.innerHTML += `
            <div class="gr-link">
              <div class="gr-link__left">
                  <p class="link__text">${url}</p>
              </div>
              <div class="gr-link__rigth">
                  <p class="link__text link__text--go">${url}</p>
                  <a href="#" class="btn btn--green btn--link">Copie</a>
              </div>
          </div>
`
        
        let copyButtons = document.querySelectorAll('.btn--link')
    copyButtons.forEach( button => button.addEventListener('click', (e)=>{
        
        copyButtons.forEach(btn =>{
            if(btn.textContent == 'Copied'){
                btn.textContent = 'Copie'
            }

        })
        e.preventDefault();
       let textContainer =  button.previousElementSibling;
        let range = document.createRange();
        range.selectNodeContents(textContainer)
        let selection = getSelection();
        selection.removeAllRanges()
        selection.addRange(range)

        document.execCommand('copy')
        button.textContent = 'Copied'
    }))
    }
    else{
        errorElement.classList.add('error-show')
        inputElement.classList.add('input-error')
    }
    
    
}


formElement.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('hola')
    let linkName = inputElement.value
    validateUrl(linkName)
    formElement.reset()

})