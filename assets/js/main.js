const mainimg = document.getElementById('imagemain');
const showinner = document.getElementById('box-show');

const check1 = document.getElementById('emroz');
const check2 = document.getElementById('soper');
const check3 = document.getElementById('froshande');

//---------------------------------------------------------------------------------
let count = 0;
let productlist = [
    {
        title: "ست 3 تیکه لباس نوزاد طرح عینک کد01",
        OFFproduct: 1,
        posting: 0,
        star: 4.2,
        price: 105000,
        darsad: 12,
        oldprice: 120000,
        srcc: "assets/image/p8.webp"
    },
    {
        title: "استیکر پارچه و لباس کارانس طرح نوزاد مدل40",
        OFFproduct: 0,
        posting: 0,
        star: 4.3,
        price: 39000,
        darsad: 0,
        oldprice: 0,
        srcc: "assets/image/p7.webp"
    },
    {
        title: "ست 3 تکه لباس نوزادی مدل پو",
        OFFproduct: 1,
        posting: 2,
        star: 4.4,
        price: 112500,
        darsad: 25,
        oldprice: 150000,
        srcc: "assets/image/p6.webp"
    },
    {
        title: "ست 3 تکه لباس نوزادی مدل بره ناقلا",
        OFFproduct: 1,
        posting: 0,
        star: 4.1,
        price: 102800,
        darsad: 11,
        oldprice: 122000,
        srcc: "assets/image/p3.webp"
    },
    {
        title: "ست 3 تکه لباس نوزادی طرح قطار",
        OFFproduct: 0,
        posting: 1,
        star: 3.1,
        price: 106800,
        darsad: 0,
        oldprice: 0,
        srcc: "assets/image/p5.webp"
    },
    {
        title: "ست 7 تیکه نوزادی مدل تاج بیبی لایف",
        OFFproduct: 0,
        posting: 0,
        star: 2.1,
        price: 495000,
        darsad: 0,
        oldprice: 0,
        srcc: "assets/image/p2.webp"
    },
    {
        title: "ست 3 تکه نوزاد کارانس مدل",
        OFFproduct: 1,
        posting: 2,
        star: 4.1,
        price: 355000,
        darsad: 30,
        oldprice: 529000,
        srcc: "assets/image/p4.webp"
    },
    {
        title: "ست 4 تکه لباس نوزاد آدمگ طرح گربه",
        OFFproduct: 1,
        posting: 2,
        star: 4.1,
        price: 355000,
        darsad: 27,
        oldprice: 529000,
        srcc: "assets/image/prod1.webp"
    }
]

showitem(productlist)


//---------------------------------------------------------------------------------

setInterval(function () {
    console.log(count)
    switch (count) {
        case 0:
            mainimg.src = "assets/image/pic2.gif";
            count += 1;
            break;
        case 1:
            mainimg.src = "assets/image/pic1.gif";
            count += 1;
            break;
        case 2:
            mainimg.src = "assets/image/download.jpg";
            count = 0;
            break;
    }

}, 5200)

function FlagOff(selector) {
    let flagOff = ``;
    if (selector) {
        flagOff += ` <div style="direction: rtl">
                    <img src="assets/image/SpecialSell.png">
                </div>`
    } else {
        flagOff += ` <div style="direction: rtl; visibility: hidden;">
                    <img src="assets/image/SpecialSell.png">
                </div>`
    }
    return flagOff;
}

function PostDrive(selector) {
    let str = ""
    switch (selector) {
        case 0:
            str = "ارسال امروز";
            break;
        case 1:
            str = "ارسال سوپر مارکتی";
            break;
        case 2:
            str = "ارسال فروشنده";
            break;
        default:
            str = "تنها 2 عدد در انبار باقی مانده";
    }
    return str;
}

function porbazdid() {
    let filteritems = productlist.filter(value => {
        return 1 === value.OFFproduct;
    });
    showitem(filteritems);
}

function Jadidtrin() {
    let filteritems = productlist.filter(value => {
        return 0 === value.OFFproduct;
    });
    showitem(filteritems);
}

function mortabet() {
    showitem(productlist)
}

function Porfrosh() {
    let filteritems = productlist.filter(value => {
        return 110000 > value.price;
    });
    showitem(filteritems);
}

function LowPrice() {
    let filteritemes = productlist;
    filteritemes.sort((a, b) => a.price - b.price);

    showitem(filteritemes);
}

function HightPrice() {
    let filteritemes = productlist;
    filteritemes.sort((a, b) => b.price - a.price);

    showitem(filteritemes);
}


function persent(selector) {
    let str;
    if (selector) {
        str = `  <div class="darsad">${selector}%</div>`;
    } else {
        str = `  <div style="visibility: hidden">10%</div>`;
    }
    return str;
}

function Oldprice(selector) {
    let str;
    if (selector) {
        str = ` <div style="direction: ltr; ">
                    <span><del class="takhfif">${selector}تومان</del></span>
                </div>`
    } else {
        str = ` <div style="direction: ltr; visibility: hidden;">
                    <span ><del class="takhfif">${selector}</del></span>
                </div>`
    }
    return str;
}

function filtering(select) {
    let filteritems = productlist.filter(value => {
        return select === value.posting;
    });
    return filteritems;
}

function postitems(selector) {
    console.log(check1.checked)
    let allitems = []
    if (check1.checked) {
        allitems = allitems.concat(filtering(0));
    }
    if (check2.checked) {
        allitems = allitems.concat(filtering(1));
    }
    if (check3.checked) {
        allitems = allitems.concat(filtering(2));
    }
    if (!check1.checked && !check2.checked && !check3.checked) {
        showitem(productlist)
    } else {
        showitem(allitems);
    }

}

function showitem(items) {
    let stringitems = ``

    items.forEach(value => {

        stringitems += `<article class="product-box">
               ${FlagOff(value.OFFproduct)}
                <img class="img-prod" src="${value.srcc}">
                <div style="direction: rtl">
                    <h3 class="title-prod">${value.title}</h3>
                </div>
                <div class="rank-star">
                    <span>${PostDrive(value.posting)}</span>
                    <div><span>${value.star}</span><img src="assets/image/star.png"></div>
                </div>
                <div class="rank-star">
                    ${persent(value.darsad)}
                    <div>${value.price}تومان</div>
                </div>
               ${Oldprice(value.oldprice)}
            </article>\n`
    });
    showinner.innerHTML = stringitems;
}