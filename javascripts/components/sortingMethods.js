

//adapted from mdn:

const sortByValue = items => {
    // sort by value
    items.sort(function (a, b) {
        return a.value - b.value;
    });
}


const sortByName = (items, sortwhat) => {


    // sort by name
    items.sort(function (a, b) {

        console.log('sorting');
        var nameA = a[`${sortwhat}`].toUpperCase(); // ignore upper and lowercase
        var nameB = b[`${sortwhat}`].toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
            return -1;
        }
        if (nameA < nameB) {
            return 1;
        }

        // names must be equal
        return 0;


    });

    return items;
}
export { sortByName, sortByValue }