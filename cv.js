console.log('cv');

//data is in array of objects for candidates
const data = [
    {
        name: 'Rohan',
        age: 18,
        city: 'Moradabad',
        language: 'Java',
        framework: 'spring',
        img: 'https://randomuser.me/api/portraits/men/51.jpg'
    },
    {
        name: 'Sohan',
        age: 19,
        city: 'Moradabad',
        language: 'Javascript',
        framework: 'React',
        img: 'https://randomuser.me/api/portraits/men/52.jpg'
    },
    {
        name: 'Camila cabello',
        age: 21,
        city: 'london',
        language: 'Java',
        framework: 'spring',
        img: 'https://randomuser.me/api/portraits/women/51.jpg'
    },
    {
        name: 'Drake',
        age: 22,
        city: 'New York',
        language: 'Python',
        framework: 'Django',
        img: 'https://randomuser.me/api/portraits/men/53.jpg'
    },
    {
        name: 'Arpan Maity',
        age: 18,
        city: 'Noida',
        language: 'Java',
        framework: 'spring',
        img: 'https://randomuser.me/api/portraits/men/54.jpg'
    },
    {
        name: 'Kritharth Jaiswal',
        age: 18,
        city: 'Allahbad',
        language: 'Java',
        framework: 'spring',
        img: 'https://randomuser.me/api/portraits/men/55.jpg'
    }
];

//cvIterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {

            if (nextIndex < profiles.length) {
                return {
                    value: profiles[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }


        }
    }
}
const candidates = cvIterator(data);
nextCV();

//button add event listener for next
let next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profiles = document.getElementById('profiles');

    if (currentCandidate != undefined) {
        image.innerHTML = `<img src="${currentCandidate.img}">`;
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else{
        alert('end of application');
        window.location.reload();
    }


}
