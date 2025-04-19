
const bh1 = document.querySelector('.balance h1');
const ie = document.querySelector('.pf');
const eel = document.querySelector('.sf');
const hr = document.querySelector('.right');
const hc = document.querySelector('.right');

const inpnam = document.querySelector('.inp1');
const iamm = document.querySelector('.inp2');
const subbt = document.querySelector('.b1');
const clrbt = document.querySelector('.b2');

let transas = [];

function upval() {
  let incc = 0;
  let expp = 0;

  transas.forEach(item => {
    if (item.amount > 0) incc += item.amount;
    else expp += item.amount;
  });

  const total = incc + expp;

  bh1.textContent = `₹${total.toFixed(2)}`;
  ie.textContent = `+₹${incc.toFixed(2)}`;
  eel.textContent = `-₹${Math.abs(expp).toFixed(2)}`;
}

function addTran(name, amount) {
  const transa = {
    id: Date.now(),
    name,
    amount: parseFloat(amount)
  };

  transas.push(transa);
  rendertransa(transa);
  upval();
}

function rendertransa(transa) {
  const div = document.createElement('div');
  div.classList.add('inf1');
  if (transa.amount < 0) {
    div.style.boxShadow = '-4px 0px 0px red';
  }

  const name = document.createElement('p');
  const amt = document.createElement('p');
  const time = document.createElement('p');
  const now = new Date();
  name.textContent = transa.name;
  if(transa.amount<0)
  {
    amt.textContent = `-₹${Math.abs(transa.amount)}`;
  }else{
  amt.textContent = `₹${transa.amount}`;
  }
  time.textContent =`${ now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
  div.appendChild(name);
  div.appendChild(time)
  div.appendChild(amt);
  
  hc.appendChild(div);
}

subbt.addEventListener('click', () => {
  const name = inpnam.value.trim();
  const amount = iamm.value.trim();

  if (name === '' || isNaN(amount) || amount === '') {
    alert(' enter valid name and amount');
    return;
  }

  addTran(name, amount);
  alert('Thanks for  Adding')
  inpnam.value = '';
  iamm.value = '';
});

clrbt.addEventListener('click', () => {
  transas = [];
  document.querySelectorAll('.inf1').forEach(el => el.remove());
  document.querySelectorAll('.inf2').forEach(el => el.remove());
  upval();
});
