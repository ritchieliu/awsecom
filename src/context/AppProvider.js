

import React, { useState } from 'react'
import AppContext from './AppContext'

const AppProvider = ({children}) => {

    const incrementItems = () => {
        setAppContext(prevState => {
            return {
                ...prevState,
                cart: {itemCount: prevState.cart.itemCount + 1}
            }
        })
    }

    const decrementItems = () => {
        setAppContext(prevState => {
            return {
                ...prevState,
                cart: {itemCount: prevState.cart.itemCount - 1}
            }
        })
    }

    const addItemToCart = (item, quantity) => {
        setAppContext(prevState => {
            var newItems = Object.assign({}, prevState)
            console.log("newItems is ", newItems)
            newItems.cart.items.push({id: item.id, quantity: quantity})
            return {
                ...prevState,
                cart: {items: newItems.cart.items}
            }
        })
    }
    
    //RL
    const removeItemCart = (item, quantity) => {
        setAppContext(prevState => {
            function findArrayElementByTitle(array, id) {
                return array.find((element) => {
                  return element.id === id;
                })
              }
            var deleteItems = Object.assign({}, prevState)
            var deleteItemsID = item.id
            const i = 2 //This will be the item localtion maybe send from button you want to remove
            //const filteredItems = items.slice(0, i).concat(items.slice(i + 1, items.length))
            //const index = fruits.findIndex(fruit => fruit === "blueberries");
            //const fruits = item
            console.log("item is :", item)
            const index = findArrayElementByTitle(item, deleteItemsID);

            function getIndex(email) {
                return item.findIndex(item => item.id === email);
              }
              
              console.log("test index:", getIndex(deleteItemsID));

            // expected output: 3
            console.log("deleteItems is ", deleteItems)
            console.log("deleteItemsID is ", deleteItemsID)
            console.log("array index is ", index)
            //deleteItems.cart.items.splice(0, {index +1})
            return {
                ...prevState,
                cart: {items: deleteItems.cart.items}
            }
        })
    }

     //
    const addItems = (items) => {
        setAppContext(prevState => {
            return {
                ...prevState,
                items
            }
        })
    }

    //RL add
    const deleteItems = (items) => {
        setAppContext(prevState => {
            return {
                ...prevState,
                items
            }
        })
    }
    //

    const storeUser = (user) => {
        setAppContext(prevState => {
            return {
                ...prevState,
                user
            }
        })
    }

    const clearCart = () => {
        setAppContext(prevState => {
            return {
                ...prevState,
                cart: {items: []}
            }
        })
    }
    
    const appState = {
        cart: {items: []},
        items: [],
        user: null,
        addItemToCart,
        removeItemCart, //RL add
        incrementItems,
        decrementItems, //RL add
        addItems,
        deleteItems, //RL add
        storeUser,
        clearCart
    }

    const [appContext, setAppContext] = useState(appState)

    return (
        <AppContext.Provider value={appContext}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider