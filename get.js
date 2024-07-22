(async () => {
    const fetch = (await import('node-fetch')).default;
    
async function myFunction(){
    try{
        const response = await fetch("http://localhost:8000/tshirt")
        if(!response.ok){
            throw new Error("Network response was not ok")
        }
        const data = await response.json()
        console.log('T-shirt : ',data)
    }catch(error){
        console.error("There has been a problem with your fetch operation: ",error)
    }
}
myFunction()
})();