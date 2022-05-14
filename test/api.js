fetch('q_papers/add_q',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    body:JSON.stringify({marks:'1',des:'human?'})
})