localStorage.clear();

alert("starting local storage demo........")

//Local Storage
    localStorage.setItem('keyWord',7)
    alert("key : "+localStorage.key('keyWord')+", value : "+localStorage.getItem('keyWord'));
        //alert output : key : keyWord, value : 7
    localStorage.setItem(1,'one');
    alert("key : "+localStorage.key(1)+ ", value : " +localStorage.getItem(1));
        //alert output : key : 1, value : one
    localStorage.clear();
    //Open with Live Server the index.html then press f12
    //DevTools -> Application -> Local Storage 
    //Key : test , Value : 1

//Object-like access
    //We can also use a plain object way of getting/setting keys, like this:
    //set key
    localStorage.test = 2;
    //get key
    alert("local storage test (value) set to : "+localStorage.test+", key : "+localStorage.key('test'));
        //alert output : local storage test (value) set to : 2, key : test
    localStorage.clear();

//Looping over keys
    //As we’ve seen, the methods provide “get/set/remove by key” functionality. 
    //But how to get all saved values or keys?
    //Unfortunately, storage objects are not iterable.
    //One way is to loop over them as over an array:
    localStorage.setItem(1,'test1');
    localStorage.setItem('test2',2);
    localStorage.setItem(3,'test3');
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        alert(`using for...i -> key : ${key}, value : ${localStorage.getItem(key)}`);
    }
        //alert output : using for...i -> key : test2, value : 2
        //alert output : using for...i -> key : 1, value : test1
        //alert output : using for...i -> key : 3, value : test3
    //Another way is to use for key in localStorage loop, just as we do with regular objects.
    //It iterates over keys, but also outputs few built-in fields that we don’t need:
// bad try
    for(let key in localStorage) {
        alert("using for...in -> key : "+key+", value : "+localStorage.getItem(key)); // shows getItem, setItem and other built-in stuff
    }
        //alert output : using for...in -> key : test2, value : 2
        //alert output : using for...in -> key : 1, value : test1
        //alert output : using for...in -> key : 3, value : test3
        //alert output : using for...in -> key : length, value : null
        //alert output : using for...in -> key : key, value : null
        //alert output : using for...in -> key : getItem, value : null
        //alert output : using for...in -> key : removeItem, value : null
        //alert output : using for...in -> key : clear, value : null
//…So we need either to filter fields from the prototype with hasOwnProperty check:
    for (const key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            const element = localStorage[key];
            continue;
        }
        alert(`using hasOwnProperty -> key : ${key}, value : ${localStorage.getItem(key)}`)
    }
        //alert output : using hasOwnProperty -> key : test2, value : 2
        //alert output : using hasOwnProperty -> key : 1, value : test1
        //alert output : using hasOwnProperty -> key : 3, value : test3
//…Or just get the “own” keys with Object.keys and then loop over them if needed:
    let keys = Object.keys(localStorage);
    for (const key of keys) {
        alert(`using for...of -> key : ${key}, value : ${localStorage.getItem(key)}`)
    }
        //alert output : using for...of -> key : test2, value : 2
        //alert output : using for...of -> key : 1, value : test1
        //alert output : using for...of -> key : 3, value : test3
    //The latter works, because Object.keys only returns the keys that belong to the object, ignoring the prototype.
    localStorage.clear();

//-----------------------------------------------------------------------------------------------------------------------------------------------

alert("now going to session storage demo.......")

//Strings only
    //Please note that both key and value must be strings.
    //If were any other type, like a number, or an object, it gets converted to string automatically:
    sessionStorage.user = {name : "John"};
    alert(sessionStorage.user)
        //alert output : [object Object]
    //We can use JSON to store objects though:
    sessionStorage.user1 = JSON.stringify({name:'Doe'})
    let user2 = JSON.parse(sessionStorage.user1)
    alert(`name : ${user2.name}`)
        //alert output : name : Doe
    //Also it is possible to stringify the whole storage object, e.g. for debugging purposes:
    // added formatting options to JSON.stringify to make the object look nicer
    alert(JSON.stringify(sessionStorage,null,2));
        //alert output :
        // {
        //     "FirstTime_Log_From_LiveServer" : "true"
        //     "user"                          : "[object Object]"
        //     "user1"	                       : "{"name":"Doe"}"
        // }

    sessionStorage.setItem('test', 1);
    //…Then refresh the page. Now you can still get the data:
    alert(`key : ${sessionStorage.key('test')}, value : ${sessionStorage.getItem('test')}`)
        //alert output : key : test, value : 1
    //…But if you open the same page in another tab, and try again there, 
    //the code above returns null, meaning “nothing found”.
    //That’s exactly because sessionStorage is bound not only to the origin, 
    //but also to the browser tab. For that reason, sessionStorage is used sparingly.
    sessionStorage.clear();
