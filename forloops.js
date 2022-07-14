const arr = [0, 4, 10, 12, 20]

// //this is going from beginning to end
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// // this will run from end to beginning
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i])
// }

// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
// }
//  console.log(sum)

for (let i = 10; i > -1; i--) {
  if (i == 0) {
    console.log(0, "\nBLAST OFF")
    return
  }
  console.log(i)
}
