// Sidebar Js
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar')
const sidebarClose = document.getElementById('sidebarClose');
const backDrop = document.getElementById('backDrop');

const onSidebarToggle = () => {
    sidebar.classList.toggle('show');
    backDrop.classList.toggle('d-none');
}
sidebarToggle.addEventListener('click',onSidebarToggle)
sidebarClose.addEventListener('click',onSidebarToggle)

// Tab js
const tabHeads = [...document.querySelectorAll('.tabHeading li')];
const tabpanels = [...document.querySelectorAll('tabPanel')];
const onTabHeadClick = (eve) => {
    let getId = eve.target.getAttribute('data-id')
    tabpanels.forEach(tabpan => {
       tabpan.classList.remove('active')
    })
    document.getElementById(getId).classList.add('active');
    tabHeads.forEach(li =>li.classList.remove('active'))
    eve.target.classList.add('active');
}
tabHeads.forEach(li => {
    li.addEventListener('click',onTabHeadClick)
})

// accor js
const accHead = [...document.querySelectorAll('.acco-heading')];
const onAccHeadingClick = (eve)=>{
    accHead.forEach(div => div.classList.remove('active'))
    eve.target.classList.add('active');
}

accHead.forEach(accHead =>{
    accHead.addEventListener('click', onAccHeadingClick)
})