const fakeApi=(data=null)=>{

 return new Promise((resolve,reject)=>{

    if(data){
        resolve({
            data:{
                username:"fousseni",
                email:"foussedev@gmail.com"
            }
        }
        )
    }else{
        reject(
           {
            error:{
                message:"Connexion impossible"
            }
            
           } 
        )
    }
       

 })
}
export default fakeApi;