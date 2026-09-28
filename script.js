const data=window.MENU_DATA||[];
const tabs=document.getElementById('tabs'),grid=document.getElementById('grid');
const cats=['All',...new Set(data.map(x=>x.category))];
const icons={'Burgers':'🍔','Shawarma':'🌯','Paratha Rolls':'🥙','Malai Boti Rolls':'🔥','Savories':'🥗','BBQ':'🍗','Fried Item':'🍟','Milkshakes':'🥤','Soda':'🍋','Beverages':'🧃'};
cats.forEach((c,i)=>{const b=document.createElement('button');b.textContent=c;b.dataset.cat=c;b.className=i===0?'active':'';b.onclick=()=>{document.querySelectorAll('.category-tabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(c)};tabs.appendChild(b)});
function render(cat='All'){
 grid.innerHTML='';
 const list=cat==='All'?data:data.filter(x=>x.category===cat);
 list.forEach(x=>{
  const card=document.createElement('article');card.className='card';
  const photo=x.image?`<img src="${x.image}" alt="${x.name}" loading="lazy">`:`<div class="fallback">${icons[x.category]||'🍽️'}</div>`;
  card.innerHTML=`<div class="photo">${photo}<span class="tag">${x.category.toUpperCase()}</span></div>
  <div class="card-body"><div class="card-top"><h3>${x.name}</h3><div class="price">Rs. ${x.price}<span class="old"> Rs. ${x.oldPrice}</span></div></div>
  <p>${desc(x)}</p><button class="add" onclick="this.textContent='Added ✓';setTimeout(()=>this.textContent='Add to order',900)">Add to order</button></div>`;
  grid.appendChild(card);
 });
}
function desc(x){
 const d={Burgers:'Freshly prepared burger from the Max Burger menu.',Shawarma:'Fresh shawarma prepared for a satisfying meal.','Paratha Rolls':'Crispy paratha roll prepared fresh.','Malai Boti Rolls':'Malai boti roll with chutney and onions.',Savories:'A Pakistani street-food favourite.',BBQ:'Grilled and seasoned BBQ item.',"Fried Item":'Crispy and served fresh.',Milkshakes:'A chilled, creamy milkshake.',Soda:'Refreshing cold drink.',Beverages:'A refreshing beverage.'};
 return d[x.category]||'Prepared fresh to order.';
}
document.getElementById('year').textContent=new Date().getFullYear();
render();
