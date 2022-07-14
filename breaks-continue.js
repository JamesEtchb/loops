// will log until 12
for (let i = 0; i < 15; i++) {
    console.log(i)
  if (i === 12) {
    break
  }
}
//will log until 11
for (let i = 0; i < 15; i++) {
    if (i === 12) {
        break
    }
    console.log(i)
}

//continue usage
for ( let i = 0; i <20; i++ ){
    if (i === 10){
        console.log('this is ten')
        continue
    }
    console.log(i)
}