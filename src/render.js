export function renderWorldCupList(arr){
    document.querySelector('.msg').textContent=''
   document.getElementById('cim').value = "";
    const cardString=arr.map(obj=>`
<div class="card">
    <h2>${obj.year} év győztese: ${obj.winner}</h2>
    <p>Az eredmény: <label>${obj.score}</label></p>
    <p>A második helyezett:<label> ${obj.runner_up} </label></p>
    <button onclick="showDetail(${obj.id})">Részletek...</button>
</div>`).join('')
document.querySelector('.WClist').innerHTML=cardString
}

