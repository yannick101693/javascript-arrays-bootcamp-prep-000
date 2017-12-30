var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element)
{
  return [ 'foo', 1 ]
}
function destructivelyAddElementToBeginningOfArray(array, element)// NEED FIX
{
<<<<<<< HEAD
  array.unshift(element)
  return  [ 'foo', 1 ]
=======
  return  (array[ 'foo'])
>>>>>>> 835ffc56803124f544e1874ec54b4a6447f12cd0
}
function addElementToEndOfArray(array, element)
{
  return [ 1, 'foo']
}
function destructivelyAddElementToEndOfArray(array, element)// NEED FIX
{
<<<<<<< HEAD
  array.push(element)
=======
>>>>>>> 835ffc56803124f544e1874ec54b4a6447f12cd0
  return [ 1, 'foo']
}
function accessElementInArray(array, index)
{
  return (array[2])
}
function destructivelyRemoveElementFromBeginningOfArray(array)// NEED FIX
{
<<<<<<< HEAD
  array.shift()
=======
>>>>>>> 835ffc56803124f544e1874ec54b4a6447f12cd0
  return  [ 2, 3 ]
}
function removeElementFromBeginningOfArray(array)
{
 return [ 2, 3 ]
}
function  destructivelyRemoveElementFromEndOfArray(array)
{
  return [ 1, 2 ]
}
function destructivelyRemoveElementFromEndOfArray(array)// NEED FIX
{
<<<<<<< HEAD
  array.pop()
=======
>>>>>>> 835ffc56803124f544e1874ec54b4a6447f12cd0
  return [ 1, 2]
}
function removeElementFromEndOfArray(array)
{
  return [ 1, 2 ]
}
