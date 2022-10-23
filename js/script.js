const lightVsDarkButton = document.querySelector('.light-vs-dark-button')

lightVsDarkButton.addEventListener('click', changeTheme);


let themeMode = 'light'

function changeTheme(e) {
    e.preventDefault();
    

    if (themeMode === 'light') {
        themeMode = 'dark'
            // Light 2 Dark
        document.querySelectorAll('section').forEach(section => section.style.backgroundColor = "#212735")
        
        
        // Dark 2 Light
        document.querySelectorAll('h1').forEach(h1 => h1.style.color = "white")
        document.querySelectorAll('h2').forEach(h2 => h2.style.color = "white")
        document.querySelectorAll('h5').forEach(h2 => h2.style.color = "white")
        document.querySelectorAll('p').forEach(h2 => h2.style.color = "white")

        document.querySelector('#programmer').src = './images/programmer-dark.svg'
        lightVsDarkButton.innerHTML = '☀️'
        
    } else {
        themeMode = 'light'
        document.querySelectorAll('section').forEach(section => section.style.backgroundColor = "white")
        // Light 2 Dark 
        document.querySelectorAll('h1').forEach(h1 => h1.style.color = "black")
        document.querySelectorAll('h2').forEach(h2 => h2.style.color = "black")
        document.querySelectorAll('h5').forEach(h2 => h2.style.color = "black")
        document.querySelectorAll('p').forEach(h2 => h2.style.color = "black")

        document.querySelector('#programmer').src = './images/programmer.svg'

        lightVsDarkButton.innerHTML = '🌙'
    }

}

