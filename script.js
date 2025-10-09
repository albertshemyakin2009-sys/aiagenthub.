
const demoAgents = [
  {id:'hr1', title:'HR-Agent — Resume PRO', desc:'Генерирует и улучшает резюме, адаптирует под вакансию.', price:'0 ₽', tag:'HR'},
  {id:'m1', title:'MarketingBot — Ad Ideas', desc:'Генерирует рекламные тексты и простые стратегии.', price:'0 ₽', tag:'Marketing'},
  {id:'s1', title:'StudyHelper — Учебный ассистент', desc:'Помогает готовиться к экзаменам и делать конспекты.', price:'0 ₽', tag:'Study'},
  {id:'c1', title:'SupportAgent — Клиентская поддержка', desc:'Автоматизирует ответы и triage запросов.', price:'0 ₽', tag:'Support'},
  {id:'a1', title:'SalesBot — Скрипты продаж', desc:'Генерирует скрипты и сценарии коммуникации.', price:'0 ₽', tag:'Sales'}
];

function $(s){return document.querySelector(s)}
function $all(s){return document.querySelectorAll(s)}

function renderCatalog(filter='', q=''){
  const wrap = $('#cards');
  if(!wrap) return;
  wrap.innerHTML='';
  demoAgents.filter(a=>(!filter||a.tag===filter) && (!q|| (a.title+a.desc).toLowerCase().includes(q.toLowerCase()))).forEach(a=>{
    const el = document.createElement('div'); el.className='card';
    el.innerHTML = `<h3>${a.title}</h3><p title="${a.desc}">${a.desc}</p><div class="foot"><div class="price">${a.price}</div><button class="btn small buy" data-id="${a.id}">Купить</button></div>`;
    wrap.appendChild(el);
  })
}

document.addEventListener('DOMContentLoaded', ()=>{
  // menu hamburger
  $('#hamburger')?.addEventListener('click', ()=>{
    $all('.nav a').forEach(el=>{ el.style.display = el.style.display==='inline' ? 'none' : 'inline' });
  });
  $('#hamburger2')?.addEventListener('click', ()=>{ $all('.nav a').forEach(el=>{ el.style.display = el.style.display==='inline' ? 'none' : 'inline' }); });
  // render catalog if present
  renderCatalog();
  $('#search')?.addEventListener('input', (e)=> renderCatalog($('#filter')?.value||'', e.target.value));
  $('#filter')?.addEventListener('change', (e)=> renderCatalog(e.target.value, $('#search')?.value||''));
  // subscribe demo
  $('#subscribeForm')?.addEventListener('submit', (e)=>{ e.preventDefault(); const email = $('#subEmail').value.trim(); if(!email){ alert('Введите email'); return;} alert('Спасибо! Мы отправим подборку на '+email); $('#subEmail').value=''; });
  // buy demo
  document.body.addEventListener('click', (e)=>{
    const buy = e.target.closest('.buy'); if(buy){ alert('Демо-покупка — 0 ₽. Проверьте профиль.'); }
  });
}); 
