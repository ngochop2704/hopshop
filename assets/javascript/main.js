const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// **********LINE TAB ON THE BOTTOM NAVBAR**********\\( transition linetab under navbar item)
const tabs = $$('.header__sort-item');
const tabActive = $('.header__sort-item.header__sort-item--active');
const line = $('.header__sort-bar .line');

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

tabs.forEach((tab, index)=> {
    tab.onclick = function (e) {
        e.preventDefault();
        $('.header__sort-item.header__sort-item--active').classList.remove('header__sort-item--active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        this.classList.add('header__sort-item--active');
    }
})

// **********REGISTER AND LOGIN USER**********\\
const loginUser = $('.login-user-js');
const registerUser = $('.register-user-js');
const loginUserBack = $('.login-user-form-back-js');
const controlBackBtns = $$('.auth-form__controls-back');

const modal = $('.modal');
const authFormLogin = $('.auth-form__login');
const authFormRegister = $('.auth-form__register');
const navbarMobileTablet = $('.header__navbar-on-mobile-tablet');
const navbarMobileTabletWrap = $('.nav__mobile-tablet-wrap');
const navbarCheckBox = $('.header__nav-checkbox');
const navbarBtn = $('.nav__bars-btn');

navbarBtn.onclick = function() {
    cartList.style.display = 'none';
    cartWrapCountClick = 0;
}

function showLoginUser() {
    navbarCheckBox.checked = false;
    modal.style.display = 'flex';
    authFormLogin.classList.remove('hidden__auth-form');
    authFormRegister.classList.add('hidden__auth-form');
}

function showRegisterUser() {
    modal.style.display = 'flex';
    authFormLogin.classList.add('hidden__auth-form');  
    authFormRegister.classList.remove('hidden__auth-form');
}

// listener event from barBtn on mobile&tablet
loginUser.onclick = function(e) {
    e.preventDefault();
    
    showLoginUser();    //show login form
}

registerUser.onclick = function(e) {
    showRegisterUser();     //show register form
}

loginUserBack.onclick = function() {
    showLoginUser();    //show login form
}

//comeback form login when user click controlBackBtns
controlBackBtns[0].onclick = function() {
    showLoginUser();    //show login user form
}

//comeback shop page when user click controlBackBtns
controlBackBtns[1].onclick = function() {
    navbarCheckBox.checked = false;
    modal.style.display = 'none';
}

// ********** HEADER SEARCH HISTORY **********\\

const searchHistoryItems = $$('.header__search-history-item');
const searchInput = $('.header__search-input');
const searchHistoryList = $('.header__search-history-list');

// prevent default aaction on HistoryList element when user click on input element
searchHistoryList.onmousedown = function(e) {
    e.preventDefault();
}

searchHistoryItems.forEach((searchHistoryItem) => {
    searchHistoryItem.onclick = function(e) {
        e.preventDefault();
        searchInput.value = e.target.innerText;
        searchInput.blur();
    }
})

searchInput.onfocus = function() {
    cartList.style.display = 'none';
    cartWrapCountClick = 0;
}

// ********** HEADER SEARCH SELECT **********\\
const searchOption = $('.header__search-option');
const searchOptionItems = $$('.header__search-option-item');
const searchSelectLabel = $('.header__search-select-label');
const searchSelect = $('.header__search-select');


searchSelect.onmouseover = function(e) {
    searchOption.style.display = 'block';
    cartList.style.display = 'none';
    cartWrapCountClick = 0;
}

searchSelect.onmouseout = function(e) {
    searchOption.style.display = 'none';
}

searchOptionItems.forEach((searchOptionItem) => {
    searchOptionItem.onclick = function(e) {
        const searchOptionItemActive = $('.header__search-option-item--active');
        searchOptionItemActive.classList.remove('header__search-option-item--active');
        this.classList.add('header__search-option-item--active');
        searchSelectLabel.innerText = e.target.innerText;

        e.stopPropagation();
        searchOption.style.display = 'none';
    }
})


// ********** HEADER CART ********** \\
const cartWrap = $('.header__cart-wrap');
const cartList = $('.header__cart-list');
const cartListItem = $('.header__cart-list-item');
const cartItems = $$('.header__cart-item');
const viewCartBtn = $('.header__cart-view-cart');
const headerSearchMobile = $('.header__mobile-search');


var cartWrapCountClick = 0;
  
//hidden cart bag on mobile when click on glass icon
headerSearchMobile.onclick = function(e) {
    cartList.style.display = 'none';
}


// show and hidden cart bag
cartWrap.onmouseenter = function(e) {
    e.stopPropagation();

    cartList.style.display = 'block';
    // console.log('mouseenter');
}

cartWrap.onmouseleave = function(e) {
    e.stopPropagation();


    cartList.style.display = 'none';
    cartWrapCountClick = 0;
    // console.log('mouseleave');
}

cartWrap.onclick = function(e) {
    e.stopPropagation();

    cartWrapCountClick++;
    // console.log(cartWrapCountClick)

    if (cartWrapCountClick == 1) {
        cartList.style.display = 'block';
    }
    else if (cartWrapCountClick == 2) {
        cartList.style.display = 'none';
        cartWrapCountClick = 0;
    }
}

cartList.onclick = function(e) {
    e.stopPropagation();
}

cartListItem.onmouseclick = function(e) {
    e.stopPropagation();
}


cartListItem.onmouseup = function(e) {
    e.stopPropagation();
}

cartItems.forEach((cartItem) => {

    cartItem.onclick = function(e) {
        e.stopPropagation();
        cartList.style.display = 'none';
        cartWrapCountClick = 0;
    }

    // delete product item in cart bag

    const deleteCartItemBtn = cartItem.querySelector('.header__cart-item-remove');
    deleteCartItemBtn.onclick = function(e) {
        e.stopPropagation();    //stop propagation on cartItem when click deleteCartItemBtn

        cartItem.style.animation = 'fadeOut linear 0.3s 0.2s forwards';
        setTimeout(function() {
            cartListItem.removeChild(cartItem);
        },500);

        cartWrapCountClick = 1;
    }
})


// ********** Home filter **********\\

    //transform homeFilterBtnPrimary on home filter bar
const homeFilterBtns = $$('.home-filter__btn');

homeFilterBtns.forEach((homeFilterBtn) => {
    homeFilterBtn.onclick = function(e) {
        const homeFilterBtnPrimary = $('.home-filter__btn.btn--primary');
        homeFilterBtnPrimary.classList.remove('btn--primary');
        e.target.classList.add('btn--primary');
    }
})

    //price arrangement form high to low or low to high
const selectInput = $('.select-input');
const selectInputList = $('.select-input__list');
const selectInputLinks = $$('.select-input__link');
const selectInputLabel = $('.select-input__label');

selectInput.onmouseover = function(e) {
    selectInputList.style.display = 'block';
}

selectInput.onmouseout = function(e) {
    selectInputList.style.display = 'none';
}

selectInputLinks.forEach((selectInputLink) => {
    selectInputLink.onclick = function(e) {
        e.preventDefault();
        selectInputLabel.innerText = e.target.innerText;
        selectInputList.style.display = 'none';
    }
})

    //transform home filter page
const filterPageBtns = $$('.home-filter__page-btn');
const filterPageCurrent = $('.home-filter__page-curent');
const filterPageControl = $('.home-filter__page-control');

var countPageClick = 1;


filterPageBtns[0].onclick = function(e) {
    e.preventDefault();

    if (countPageClick > 1) {
        countPageClick--;
        filterPageCurrent.innerText = countPageClick;
    }
}

filterPageBtns[1].onclick = function(e) {
    e.preventDefault();
    
    if (countPageClick < 14) {
        countPageClick++;
        filterPageCurrent.innerText = countPageClick;
    }
}

filterPageControl.onclick = function(e) {
    if(countPageClick == 1) {
        filterPageBtns[0].classList.add('home-filter__page-btn--disabled');
    }
    else if (countPageClick == 14) {
        filterPageBtns[1].classList.add('home-filter__page-btn--disabled');
    }
    else {
        filterPageBtns[0].classList.remove('home-filter__page-btn--disabled');
        filterPageBtns[1].classList.remove('home-filter__page-btn--disabled');
    }
}


// ********** HOME PAGINATION SIMPLE **********\\
const paginationItemLinks = $$('.pagination-item__link');

var paginationBtns = Array.from(paginationItemLinks);
var rightBtn = paginationBtns.pop();
var leftBtn = paginationBtns.shift();

paginationBtns.forEach((paginationBtn) => {

    paginationBtn.onclick = function(e) {
        e.preventDefault();
        // e.stopPropagation();

        const paginationBtnPrimary = $('.pagination-item.pagination-item--active');

        paginationBtnPrimary.classList.remove('pagination-item--active');
        paginationBtn.parentElement.classList.add('pagination-item--active');
    }
})

rightBtn.onclick = function(e) {
    e.preventDefault();
    const paginationBtnPrimary = $('.pagination-item.pagination-item--active');

    if(Number(paginationBtnPrimary.outerText) < 7) {
        paginationBtnPrimary.classList.remove('pagination-item--active');
        paginationBtnPrimary.nextElementSibling.classList.add('pagination-item--active');
    }
}


leftBtn.onclick = function(e) {
    e.preventDefault();
    const paginationBtnPrimary = $('.pagination-item.pagination-item--active');

    if(Number(paginationBtnPrimary.outerText) > 1) {
        paginationBtnPrimary.classList.remove('pagination-item--active');
        paginationBtnPrimary.previousElementSibling.classList.add('pagination-item--active');
    }
}