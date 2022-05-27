const name = document.getElementById('name');
const email = document.getElementById('email');
const faculty = document.getElementById('faculty');
const address = document.getElementById('address');
const date = document.getElementById('date');


name.addEventListener('blur', () => {
    if (!/^[А-Яа-яІіЇїЄє]{2,15}\s[А-ЯІЇЄ]{1}\.[А-ЯІЇЄ]{1}\.$/.test(name.value))
        name.classList.add('input');
    else{
        name.classList.remove('input');
    }
})

faculty.addEventListener('blur', () => {
    if (!/^[А-ЯІЄЇ]{4}$/.test(faculty.value))
        faculty.classList.add('input');
    else{
        faculty.classList.remove('input');
    }
})

date.addEventListener('blur', () => {
    if (!/\d{2}\.\d{2}\.\d{4}/.test(date.value))
        date.classList.add('input');
    else{
        date.classList.remove('input');
    }
})

address.addEventListener('blur', () => {
    if (!/м\.\s[А-Яа-яІіЇїЄє]{1,20}$/.test(address.value))
        address.classList.add('input');
    else{
        address.classList.remove('input');
    }
})

email.addEventListener("blur", () => {
    if(!/[\w_\-]+@\w+\.\w+/.test(email.value))
        email.classList.add('input');
    else{
        email.classList.remove('input');
    }
})
