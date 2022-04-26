// DOM
// empty the contents of the shopping list <ul> element.

const emptyShoppingList = () => {
    const list = document.querySelector("#shopping-list")
    return list.innerHTML = ""
}

emptyShoppingList();
