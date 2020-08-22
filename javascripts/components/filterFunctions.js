

const filteroutNY = (businesses) => {

    const newyorkArray = businesses.filter(business => {
        return business.addressStateCode === 'NY';
    })

    const mybiz = $('#filterbusinesses');
    mybiz.html('<h1>NY Businesses</h1>');
    newyorkArray.forEach(business => {
        mybiz.append(`
    <h2>${business.companyName}</h2>
    <section>
    ${business.addressFullStreet}
    </section>
    `)
    });
    mybiz.append('<hr/>')
}



export { filteroutNY }