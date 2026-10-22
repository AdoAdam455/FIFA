import { worldCupList } from './data'
import { renderWorldCupList } from './render'
import './style.css'
renderWorldCupList(worldCupList)

window.showDetail=function showDetail(id){
    console.log(id);
    const SelectedEvent=worldCupList.find(obj=>obj.id==id)
    console.log(SelectedEvent.winner);
    alert(`
        ${SelectedEvent.winner}-${SelectedEvent.runner_up}(${SelectedEvent.year});\n 
        ${SelectedEvent.venue}\n 
        ${SelectedEvent.location}\n 
        NÉZŐK SZÁMA:${SelectedEvent.attendance} `)
    

    
}
window.handleSearch=function handleSearch(){
    const searchedCountry=document.getElementById('cim').value
    console.log(searchedCountry);
    const filteredCountry=worldCupList.filter(obj=>obj.winner.toLowerCase()==(searchedCountry.toLowerCase()) ||  obj.runner_up.toLowerCase()==(searchedCountry.toLowerCase()))
    renderWorldCupList(filteredCountry)
    document.querySelector('.msg').textContent=searchedCountry
    const msg=filteredCountry.length==0 ? `Nincs találat! A keresett kifejezés: ${searchedCountry}!` : ''
    document.querySelector('.msg').textContent=msg
    
    
}
window.ClearFilter=function ClearFilter(){
renderWorldCupList(worldCupList)

   
}

