export default function browserVersionCompatibility (isValid) {
  if (!isValid) {
    BrowserVersionWarningBoxStyle()
    const body = document.body
    body.classList.add('browser-not-supported')
    const node = document.createElement('DIV')
    node.classList.add('browser-error-box')
    node.innerHTML = `
      <div class="alert-content">
        <div class="alert-circle">
          <span class="mdi mdi-alert-outline mdi-24px"></span>
        </div>
        <div class="alert-text">
          مرورگر شما منسوخ شده است. لطفا مرورگر خود را به روز رسانی کنید.<br> <a href="https://www.google.com/chrome/" target="blank"> گوگل کروم </a> , <a href="https://www.mozilla.org/en-US/firefox/new/" target="blank"> فایرفاکس </a>
        </div>
      </div>
      <button class="alert-close">
        <span class="mdi mdi-close"></span>
      </button>
    `
    body.insertAdjacentElement('afterbegin', node)
    const closeBtn = document.getElementsByClassName('browser-error-box')
    if (closeBtn.length > 0) {
      closeBtn[0].addEventListener('click', () => {
        closeBrowserVersionWarningBox()
      })
    }
  }
}
export function closeBrowserVersionWarningBox () {
  const body = document.body
  body.classList.remove('browser-not-supported')
  const errorBox = document.getElementsByClassName('browser-error-box')
  if (errorBox.length > 0) {
    errorBox[0].remove()
  }
}
function BrowserVersionWarningBoxStyle () {
  var style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = `
   .browser-not-supported .v-application--wrap main,
   .browser-not-supported .v-application--wrap header,
   .browser-not-supported .v-application--wrap nav {
     margin-top: 50px !important;
   }
   .browser-not-supported .browser-error-box {
     position: fixed;
     top: 0px;
     width: 100%;
     height: 50px;
     border: #FB8C00 2px solid;
     background-color: #FFF3E0;
     z-index: 1000;
     direction: rtl;
     padding: 0px 20px;
     display: flex;
     align-items: center;
     justify-content: space-between
   }
   .browser-not-supported .browser-error-box .alert-content {
     display: flex;
     align-items: center;
   }
   .browser-not-supported .browser-error-box .alert-circle {
     background: rgba(255, 153, 0, 0.2);
     height: 40px;
     width: 40px;
     border-radius: 50%;
     display: flex;
     justify-content: center;
     align-items: center;
     color: #FB8C00;
     align-items: center;
     padding-top: 2px;
   }
   .browser-not-supported .browser-error-box .alert-text {
     padding: 0px 20px;
     color: #FB8C00;
   }
   .browser-not-supported .browser-error-box .alert-close {
     display: flex;
     justify-content: center;
     align-items: center;
     color: #FB8C00;
     padding-top: 2px;
   }
  `
  document.getElementsByTagName('head')[0].appendChild(style)
}
