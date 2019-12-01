
const url = "https://sandbox-api.brewerydb.com/v2/"

const key = "f918ed8e95e1713d835171810a10c6e2"



let description = document.querySelector('section')

const beerImage = document.querySelector('.beer-image')
const beerName = document.querySelector('.beer-name')
const brewery = document.querySelector('.brewery')
const style = document.querySelector('.style')
const beerDescribe = document.querySelector('.beer-describe')
const abv = document.querySelector('.abv-amount')
const ibu = document.querySelector('.ibu-amount')


const grid1 = document.querySelector('#grid1')
grid1.addEventListener('click', addGrid1)
function addGrid1() {
	document.querySelector('section').style.display = 'flex'
	document.querySelector('.beer-image').src = "https://brewerydb-images.s3.amazonaws.com/brewery/yvQRBB/upload_aRlDlx-squareLarge.png"
	document.querySelector('.beer-name').innerHTML = "1878"
	document.querySelector('.brewery').innerHTML = "Red Gap Brewing"
	document.querySelector('.style').innerHTML = "American Lager"
	document.querySelector('.beer-describe').innerHTML = "A beer for Texas beer drinkers. This crisp, clean, and clear throw-back Lager might inspire sitting on a tractor, repairing a downed fence, or an evening of telling tales about the way things used to be."
	document.querySelector('.abv-amount').innerHTML = "5.2%"
	document.querySelector('.ibu-amount').innerHTML = "22"	
}

const grid2 = document.querySelector('#grid2')
grid2.addEventListener('click', addGrid2)
function addGrid2() {
	document.querySelector('section').style.display = 'flex'
	document.querySelector('.beer-image').src = "https://brewerydb-images.s3.amazonaws.com/beer/CmrsY0/upload_I2N60H-large.png"
	document.querySelector('.beer-name').innerHTML = "American Strong Ale"
	document.querySelector('.brewery').innerHTML = "Seventh Son Brewing Company"
	document.querySelector('.style').innerHTML = "Strong Ale"
	document.querySelector('.beer-describe').innerHTML = "A ruddy amber American Strong clocking in at 7.7% abv. Grapefruit and stone fruit hop aroma and character are balanced by a rich red malt backbone. A precise blend of 7 hops go into the brewing and dry hopping process including Nelson Sauvin, Mosaic, Horizon, Palisade, Citra, Willamette, & Columbus. From Flannery O'Connor to Iron Maiden the Seventh Son of a Seventh Son is embedded in American culture as a powerful harbinger of good fortune; what better name for our flagship ale?"
	document.querySelector('.abv-amount').innerHTML = "7.7%"
	document.querySelector('.ibu-amount').innerHTML = "80"	
}

const grid3 = document.querySelector('#grid3')
grid3.addEventListener('click', addGrid3)
function addGrid3() {
	document.querySelector('section').style.display = 'flex'
	document.querySelector('.beer-image').src = "https://brewerydb-images.s3.amazonaws.com/brewery/05irfI/upload_M0JX7m-squareLarge.png"
	document.querySelector('.beer-name').innerHTML = "Banjaxed"
	document.querySelector('.brewery').innerHTML = "Summit Brewing Company"
	document.querySelector('.style').innerHTML = "English Brown"
	document.querySelector('.beer-describe').innerHTML = "Summit Banjaxed Irish-Style Ale combines a blend of pale and caramel malts with U.S. and New Zealand hops to create a full and balanced beer with aromas of caramel, stone fruit and blackcurrants."
	document.querySelector('.abv-amount').innerHTML = "5.8%"
	document.querySelector('.ibu-amount').innerHTML = "38"	
}

const grid4 = document.querySelector('#grid4')
grid4.addEventListener('click', addGrid4)
function addGrid4() {
	document.querySelector('section').style.display = 'flex'
	document.querySelector('.beer-image').src = "https://brewerydb-images.s3.amazonaws.com/brewery/UkEpjL/upload_5fbGS6-squareLarge.png"
	document.querySelector('.beer-name').innerHTML = "A Devil In the Boardroom"
	document.querySelector('.brewery').innerHTML = "Brewaucracy"
	document.querySelector('.style').innerHTML = "Extra Special Bitter"
	document.querySelector('.beer-describe').innerHTML = "A collaboration with an old friend who happened to be passing through and couldn't resist a shiny new brewery! We both love a good ESB with it's beautiful dark fruitcake flavours, so that's what we made. Except, The Devil made us make it a little stronger..."
	document.querySelector('.abv-amount').innerHTML = "6.7%"
	document.querySelector('.ibu-amount').innerHTML = "42"	
}

const grid5 = document.querySelector('#grid5')
grid5.addEventListener('click', addGrid5)
function addGrid5() {
	document.querySelector('section').style.display = 'flex'
	document.querySelector('.beer-image').src = "https://brewerydb-images.s3.amazonaws.com/brewery/iSg2uM/upload_iWlrOk-squareLarge.png"
	document.querySelector('.beer-name').innerHTML = "Big Paw Porter"
	document.querySelector('.brewery').innerHTML = "Wooden Bear Brewing Co."
	document.querySelector('.style').innerHTML = "Robust Porter"
	document.querySelector('.beer-describe').innerHTML = "Big Paw Porter is influenced by the darker, roasted aspects of malt with complimentary Munich, chocolate, and brown malt flavoring with just the right amount of bittering. With a slight fruity flavor and trace floral accents, this porter is a good balance between brown ales and stouts."
	document.querySelector('.abv-amount').innerHTML = "5.9%"
	document.querySelector('.ibu-amount').innerHTML = "41"	
}

const grid6 = document.querySelector('#grid6')
grid6.addEventListener('click', addGrid6)
function addGrid6() {
	document.querySelector('section').style.display = 'flex'
	document.querySelector('.beer-image').src = "https://brewerydb-images.s3.amazonaws.com/beer/CCR94D/upload_MvZELT-large.png"
	document.querySelector('.beer-name').innerHTML = "Alaskan Stout"
	document.querySelector('.brewery').innerHTML = "Alaskan Brewing Co."
	document.querySelector('.style').innerHTML = "Oatmeal Stout"
	document.querySelector('.beer-describe').innerHTML = "Oatmeal Stout. The origins of Oatmeal Stout go back hundreds of years when oats were added to Stouts to promote a healthier image than other beers available during that time period. The unique blend of the oats and malts in Alaskan Stout produce a balanced, smooth beer with hints of coffee and caramel. Alaskan Stout is made from glacier-fed water and a generous belnd of European and Pacific Northwest hop varieties and premium two-row and specialty malts. Our water originates in the 1,500 square-mile Juneau Ice Field and the from the more than 90 inches of rainfall Juneau receives each year."
	document.querySelector('.abv-amount').innerHTML = "5.2%"
	document.querySelector('.ibu-amount').innerHTML = "22"	
}

const grid7 = document.querySelector('#grid7')
grid7.addEventListener('click', addGrid7)
function addGrid7() {
	document.querySelector('section').style.display = 'flex'
	document.querySelector('.beer-image').src = "https://brewerydb-images.s3.amazonaws.com/beer/60MwFz/upload_GziG0k-large.png"
	document.querySelector('.beer-name').innerHTML = "Big Dicks Olde Ale"
	document.querySelector('.brewery').innerHTML = "Arcadia Brewing Company"
	document.querySelector('.style').innerHTML = "Old Ale"
	document.querySelector('.beer-describe').innerHTML = "Somewhat of a cousin to Barleywine, Big Dick's is a classic English-style Olde Ale. Sweet and full-bodied malt flavors are complemented by a fragrant but mild hop bitterness. Sweet, bready malt aromas combine with rich flavors of dark fruit, brown sugar, caramel, and sweet nuts. A beer for keeping, Big Dick's Olde Ale will age gracefully, while fruity flavors continue to develop and bitterness will subside."
	document.querySelector('.abv-amount').innerHTML = "8.2%"
	document.querySelector('.ibu-amount').innerHTML = "36"	
}

const grid8 = document.querySelector('#grid8')
grid8.addEventListener('click', addGrid8)
function addGrid8() {
	document.querySelector('section').style.display = 'flex'
	document.querySelector('.beer-image').src = "https://brewerydb-images.s3.amazonaws.com/brewery/yC7IbZ/upload_lavq2h-squareLarge.png"
	document.querySelector('.beer-name').innerHTML = "Alien Milk Stout"
	document.querySelector('.brewery').innerHTML = "Sierra Blanca Brewing Company"
	document.querySelector('.style').innerHTML = "Sweet Stout"
	document.querySelector('.beer-describe').innerHTML = "A pitch black with a thick beige head, notes of caramel, chocolate, vanilla and mild hops. Smooth feel with the lactose balancing the malty notes and earthy chocolate flavor."
	document.querySelector('.abv-amount').innerHTML = "5.7%"
	document.querySelector('.ibu-amount').innerHTML = "32"	
}






/// EXIT BUTTON

const button = document.querySelector('button')

button.addEventListener('click', close)

function close() {
	document.querySelector('section').style.display = 'none'
}

