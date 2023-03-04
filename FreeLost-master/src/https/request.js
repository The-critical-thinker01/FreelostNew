export default Post = async (link, body, method)=>{
    await fetch(link, {method: method, body: body})
    .then(e=>e.json())
    .then(result=>{
        console.log(result);
        return result;
    })
    .catch(e=>{return {"error": true, "message": 'NetWork Error '}})
}
