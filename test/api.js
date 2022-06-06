// fetch('https://testez-pg.herokuapp.com/q_papers/add_q',{
//     method:'POST',
//     mode:'cors',
//     headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     body:JSON.stringify({marks:'1',des:'human?'})
// })

fetch('/q_papers/all')
.then(res=>res.json())
.then(data=>console.log(data))