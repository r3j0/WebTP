const imagesLink = [
    "1502134249126-9f3755a50d78", // https://unsplash.com/ko/%EC%82%AC%EC%A7%84/0o_GEzyargo
    "1451187580459-43490279c0fa", // https://unsplash.com/ko/%EC%82%AC%EC%A7%84/Q1p7bh3SHj8
    "1519608487953-e999c86e7455", // https://unsplash.com/ko/%EC%82%AC%EC%A7%84/7PqRZK6rbaE
];

const chosenLink = imagesLink[Math.floor(Math.random() * imagesLink.length)];

const bgImage = `url(https://images.unsplash.com/photo-${chosenLink}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80)`
document.body.style.backgroundImage = bgImage