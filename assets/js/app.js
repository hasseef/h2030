window.HS={
 save:(k,v)=>localStorage.setItem(k,JSON.stringify(v)),
 load:(k,d=null)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},
 csv:(name,rows)=>{const csv=rows.map(r=>r.map(x=>`"${String(x).replace(/"/g,'""')}"`).join(',')).join('\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download=name;a.click()},
 countUp:(el,to,dur=1200)=>{const n=+to;let c=0;const step=Math.max(1,Math.floor(n/(dur/16)));const t=setInterval(()=>{c+=step;if(c>=n){c=n;clearInterval(t)} el.textContent=c.toLocaleString('ar-SA')},16)}
};