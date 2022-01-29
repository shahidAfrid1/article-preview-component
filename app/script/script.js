const shareBtn = document.querySelector(".share")
const shareBox = document.querySelector(".social-links");




const handleclick = (e)=>{
    const offclick = (evt)=>{
        if(e !== evt){
            shareBox.classList.toggle("social-links-click")
            shareBtn.classList.toggle("share-click")
            document.removeEventListener("click",offclick)
        }
       
    }
   
    if(!shareBtn.classList.contains("share-click")){
        shareBox.classList.toggle("social-links-click")
        shareBtn.classList.toggle("share-click")
        document.addEventListener("click",offclick)
    }
}
shareBtn.addEventListener("click",handleclick)
