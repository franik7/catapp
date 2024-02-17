const btn = document.querySelector('button')

const clickHandler = () => {
    axios.get('http://127.0.0.1:4000/api/cat')
    .then(res => alert(res.data))
    .catch(err => console.log(err))
}

btn.addEventListener('click', clickHandler)