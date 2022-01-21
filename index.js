console.log("Cv Screener");
//image is from randomuser.me api
//data is an array of object which contain information about the candidate
const data=[
    {
        name:'Rohan Das',
        age:18,
        city:'Kolkata',
        language:'Python',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
        name:'Kartik Aryan',
        age: 28,
        city:'Delhi',
        language:'Java',
        framework:'React',
        image:'https://randomuser.me/api/portraits/men/62.jpg'
    },
   
    {
        name:'Priyanka Chopra',
        age:34,
        city:'America',
        language:'Jonas',
        framework:'Jonas Framework',
        image:'https://randomuser.me/api/portraits/women/61.jpg'
    },
    {
        name:'Elon Musk',
        age: 45,
        city:'Chennai',
        language:'Python',
        framework:'Flask',
        image:'https://randomuser.me/api/portraits/men/63.jpg'
    },
    {
        name:'Sidharth Singhania',
        age: 36,
        city:'Mumbai',
        language:'JavaScript',
        framework:'Angular',
        image:'https://randomuser.me/api/portraits/men/70.jpg'
    },
]


//cv iterator

function cvIterator(profiles){
    let nextIndex=0;
    return{
        next: function(){
            return nextIndex < profiles.length ?
            {value :profiles[nextIndex++], done:false}:
            {done:true}
        }  
    } ;
}


const candidates = cvIterator(data);

nextCV();

//button listerner for next button

const next=document.getElementById("next");
next.addEventListener('click',nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
   
    let image=document.getElementById("image");
    let profile=document.getElementById("profile");
   
    if(currentCandidate  != undefined){
        image.innerHTML=`<img src='${currentCandidate.image}'>`;
        profile.innerHTML=`<ul class="list-group">
                                <li class="list-group-item">Name: ${currentCandidate.name}</li>
                                <li class="list-group-item">${currentCandidate.age} years old</li>
                                <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                                <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
                                <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
                            </ul>`;
    }
    else{
        alert('End of Applications');
        window.location.reload();
    }
    
}