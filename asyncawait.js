url = "https://cdn.contentful.com/spaces/wiothdq64tqj/environments/master/entries?access_token=fbY3krPsiW8hWQ4m7GysjrfCfBdeCP9gBLqh3klbO20";

blog1 = [];


///////NORMAL FETCH
fetch(url)
.then(resp => resp.json())
.then(json =>{
    blog1 = json.items
    console.log(blog1)})
console.log(blog1)

/////////FETCH WITH ASYNC AWAIT
const myFetch = async (url) => {
    const response = await fetch(url)
    const json = await response.json()
    console.log(json.items)
    return json.items
}

blog2 = myFetch(url);
console.log(blog2);
