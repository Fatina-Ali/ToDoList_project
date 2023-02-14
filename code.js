let i = 1;

        
function createButtons(w) {
    //create check box button
    let createbtn1 = document.createElement("input");
    createbtn1.type = "checkbox";
    createbtn1.className = "checkBT";
    createbtn1.id = `${w}`;

    //create edit button
    let createbtn2 = document.createElement("button");
    createbtn2.className = "editBT";
    createbtn2.id = `${w}`;
    let content2 = document.createTextNode("e");
    createbtn2.appendChild(content2);
    createbtn2.style.cssText = `width:20px ; height:26px ; border-color:pink ;color: black`;
    
    //create delete button
    let createbtn3 = document.createElement("button");
    createbtn3.className = "deleteBT";
    createbtn3.id = `${w}`;
    let content3 = document.createTextNode("d");
    createbtn3.appendChild(content3);
    createbtn3.style.cssText = `width:20px ; height:26px ; border-color:pink ; color: black ` ;
    
    //create main div content buttons
    let mainDiv = document.createElement("div");
    mainDiv.appendChild(createbtn1);
    mainDiv.appendChild(createbtn2);
    mainDiv.appendChild(createbtn3);
    mainDiv.style.cssText = `display:flex ; height:26px`;
    mainDiv.id = `${w}`;
    return mainDiv
}


//############################################################################################################

function add(w) {
    let CreateElemant = document.createElement("input");
    CreateElemant.type = "text";
    let y = window.localStorage.getItem(`${w}`)
    CreateElemant.value=`${y}`
    CreateElemant.id = `${w}`;
    CreateElemant.className="ITEM"
    CreateElemant.maxLength="80"
    CreateElemant.style.cssText = `height:20px ; display:block ; background-color:pink ; border-color:pink;width:500px`;
    let getList = document.querySelector(".list");
    getList.append(CreateElemant);
    let getListButtons = document.querySelector(".listbtn")
    let varElement = createButtons(w);
    getListButtons.append(varElement);
    i += 1;
    
}
//############################################################################################################
function item_input(j) {
    let item = document.getElementById("itemInput").value;
    if (item != "") {
        window.localStorage.setItem(`${j}`, item);
        add(j);
        document.getElementById("itemInput").value = "";
        j++;

    }
    else {
        confirm("ENTER ITEM !!");
    }

}

//############################################################################################################

document.getElementById("submit").onclick = function () {
    let localStorage_length = window.localStorage.length;

    item_input(localStorage_length)


    

}

//############################################################################################################   

window.onload = function () {
    let localStorage_length = window.localStorage.length;
    for (let q = 0; q < (localStorage_length); q++){
        let z = window.localStorage.key(q);
        if (String(z).length == 1) {
            add(z);
            
        }

        
    }
    for (let q = 0; q < (localStorage_length); q++){
        let z = window.localStorage.key(q);
        if (window.localStorage.getItem(z) == "1") {
            let d = `${z.slice(3)}`
            document.getElementsByTagName("input")[Number(d) + 1].style.color = "green"
            document.getElementsByTagName("input")[Number(d) + 1].style.fontSize="20px"

            // document.getElementsByTagName(`input:(#${z})`).style.fontSize = "20px"
            // document.getElementsByTagName(`input:(#${z})`).style.color="green"
        }
        }
}

//############################################################################################################
document.body.addEventListener("click", event => {
    if (event.target.className == "deleteBT") {
        if (window.localStorage.length > 1) {
            let ele_id = event.target.id;
            window.localStorage.removeItem(ele_id);
            let getTask = document.getElementsByTagName("input")[Number(ele_id) + 1];
            let getDiv = document.getElementsByTagName("div")[ele_id];
            getDiv.remove();
            getTask.remove();
        }
        else {
            window.localStorage.clear();
            let getTask = document.getElementsByTagName("input")[1];
            let getDiv = document.getElementsByTagName("div")[0];
            getDiv.remove();
            getTask.remove();
        }
    }


//############################################################################################################    

    if (event.target.className == "checkBT") {
        let ele_id = event.target.id;
        let getTask = document.getElementsByTagName("input")[Number(ele_id) + 1];
        getTask.style.color = "green";
        getTask.style.fontSize = "20px";
        window.localStorage.setItem(`id+${String(Number(ele_id))}` , "1")
        



    }

//############################################################################################################

        if (event.target.className == "editBT") {
            let ele_id = event.target.id;
            let getTask = document.getElementsByTagName("input")[Number(ele_id) + 1];
            getTask.focus();
            getTask.onchange = function () {
                let newTask = getTask.value;
                window.localStorage.removeItem(`${ele_id}`)
                window.localStorage.setItem(`${ele_id}`,`${newTask}`)
        } 
    }

        });

//############################################################################################################

document.querySelector(".btnClearAll").onclick = function () {
    for (let i = 0; i < (window.localStorage.length); i++) {
        document.getElementsByTagName("div")[0].remove();
        document.getElementsByTagName("input")[1].remove();    
        console.log(document.getElementsByTagName("div")[0])
    }
    window.localStorage.clear()

        
        }





// window.localStorage.clear();
        