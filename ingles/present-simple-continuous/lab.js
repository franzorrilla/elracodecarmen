
(()=>{
 const root=document.getElementById('carmen-time-lab');
 const $=s=>root.querySelector(s);
 let time='routine',form='positive';
 const actions={dance:{base:'dance',third:'dances',ing:'dancing',noun:'',icon:'🩰',es:['bailo','baila','bailan'],ger:'bailando'},read:{base:'read',third:'reads',ing:'reading',noun:'a book',icon:'📖',es:['leo un libro','lee un libro','leen un libro'],ger:'leyendo un libro'},swim:{base:'swim',third:'swims',ing:'swimming',noun:'',icon:'🏊',es:['nado','nada','nadan'],ger:'nadando'}};
 function render(){
 const p=$('#ctl-person').value,a=actions[$('#ctl-action').value],sub=p==='she'?'She':p==='they'?'They':'I',low=p==='I'?'I':p;
 const ix=p==='I'?0:p==='she'?1:2,aux=p==='I'?'am':p==='she'?'is':'are',tail=a.noun?' '+a.noun:'',when=time==='routine'?'every Saturday':'now';
 let sentence,detail,sp;
 if(time==='routine'){
  const does=p==='she',verb=does?a.third:a.base;
  sentence=form==='positive'?`${sub} ${verb}${tail} ${when}.`:form==='negative'?`${sub} ${does?'doesn’t':'don’t'} ${a.base}${tail} ${when}.`:`${does?'Does':'Do'} ${low} ${a.base}${tail} ${when}?`;
  detail=form==='positive'?(does?'She + verbo con -s: '+a.third:'I / they + verbo sin -s: '+a.base):(does?'Does / doesn’t + verbo sin -s: '+a.base:'Do / don’t + verbo: '+a.base);
  sp=(form==='negative'?'No ':'')+a.es[ix]+' todos los sábados';
 }else{
  sentence=form==='positive'?`${sub} ${aux} ${a.ing}${tail} ${when}.`:form==='negative'?`${sub} ${aux} not ${a.ing}${tail} ${when}.`:`${aux[0].toUpperCase()+aux.slice(1)} ${low} ${a.ing}${tail} ${when}?`;
  detail=`Dos piezas: ${aux} + ${a.ing}`;
  sp=(form==='negative'?'No ':'')+['estoy','está','están'][ix]+' '+a.ger+' ahora';
 }
 sp=sp[0].toUpperCase()+sp.slice(1);sp=form==='question'?'¿'+sp+'?':sp+'.';
 $('#ctl-sentence').textContent=sentence;$('#ctl-spanish').textContent=sp;$('#ctl-detail').textContent=detail;
 $('#ctl-scene').dataset.time=time;
 $('#ctl-tense').textContent=time==='routine'?'Present simple · se repite':'Present continuous · está pasando';
 const labels=time==='routine'?['Este sábado','Próximo sábado','Otro sábado']:['AHORA'];
 $('#ctl-scene').innerHTML=labels.map(label=>`<div style="display:flex;flex-direction:column;align-items:center;gap:10px"><span class="text-small">${label}</span><span class="action-picture" aria-hidden="true">${a.icon}</span><span>${form==='negative'?'No':form==='question'?'¿…?':time==='routine'?'✓':'En curso'}</span></div>`).join('');
 $('#ctl-scene').setAttribute('aria-label',time==='routine'?'La acción se repite cada sábado':'La acción ocurre en este momento');
 root.querySelectorAll('[data-time]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.time===time));
 root.querySelectorAll('[data-form]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.form===form));
 $('#ctl-notice').textContent=time==='routine'?'Es una costumbre. No sabemos si está ocurriendo justo ahora.':(form==='negative'?'La frase dice que NO está ocurriendo ahora.':form==='question'?'Preguntamos si está ocurriendo ahora.':'La acción está ocurriendo en este momento.');
 }
 root.querySelectorAll('[data-time]').forEach(b=>b.addEventListener('click',()=>{time=b.dataset.time;render()}));
 root.querySelectorAll('[data-form]').forEach(b=>b.addEventListener('click',()=>{form=b.dataset.form;render()}));
 $('#ctl-person').addEventListener('change',render);$('#ctl-action').addEventListener('change',render);render();
})();
