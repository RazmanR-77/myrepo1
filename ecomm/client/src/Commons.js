// MyCodes.js
import React from 'react'
import CartItem2, { getProduct as getProductJson } from './components/CartItem2';

function Commons() {
// export global module and function, as Commons()

  // A test array of objects. In a real world situation you would have more than just the 'name' key on the objects
  const initialArrayOfObjects = [
    {
      name: '🐑',
    },
    {
      name: '🐑',
    },
    {
      name: '🐫',
    },
    {
      name: '🦕',
    },
    {
      name: '🦕',
    },
  ]

  // will filter out the duplicates by the 'name' field
  let removeDuplicateObjects = removeDuplicateObjectsByKey(initialArrayOfObjects, 'name')
  // [ { name: '🐑' }, { name: '🐫' }, { name: '🦕' } ]


  // todo  
  // let uniquelist over here

  //initials
  let { cartList, uniqueList } = getUnique();

  // let  cartList, uniqueList   ; 


  return (
    <div>MyCodes
      here i write
      <div>
        tempp only myycode
        tempp only myycode
        tempp only myycode

        to remoe deuplicates
      </div>

      {console.log(initialArrayOfObjects, " myythen remove ==", removeDuplicateObjects)}


      {console.log(cartList, " BEFOREEEuniquelist remove ==", uniqueList)}
      <div onLoad={(e) => { uniqueList = getUnique() }} >
        loaddd;;
      </div>

      add more json
      {cartList.push(getProductJson())}
      {cartList.push(getProductJson())}

      {console.log(cartList, " uniquelist remove ==", uniqueList)}

      todo
      use a different array varia
      init array variable

      -
      cartlist.cartItem.name   to ;;
      unqiueList
      list22


      -remove by cartItem.name duplicate
      removeDuplicateObjectsByKey(initialArrayOfObjects, 'name');


    </div>
  )

  function getUnique() {
    let cartList = [];

    // cartList.push(<CartItem2 />);
    cartList.push(getProductJson());
    cartList.push(getProductJson());

    let uniqueList;
    uniqueList = removeDuplicateObjectsByKey(cartList, 'name');
    return { cartList, uniqueList };
  }
}


// export global module and function, as Commons()
// used to remove duplicate in CartItems
export function removeDuplicateObjectsByKey(array, fieldToDuplicateCheck) {
  const newArray = []
  const arrayKeys = []

  array.forEach((item) => {
    // check if we don't already have the value within the arrayKeys array
    if (!arrayKeys.includes(item[fieldToDuplicateCheck])) {
      // push this value to the arrayKeys array
      arrayKeys.push(item[fieldToDuplicateCheck])
      // push this object to the newArray array
      newArray.push(item)
    }
  })

  // return the newArray with the filtered out duplicate objects
  return newArray
}


export default Commons