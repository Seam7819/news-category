const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    const AllNews = data.data.news_category;
    const navSection = document.getElementById('nav-sections');
    AllNews.forEach( news => {
        // console.log(news);
        const ShowNews = document.createElement('button');
        ShowNews.innerHTML = `
        <button onclick = "handleData('${news.category_id}')" class="btn">${news.category_name}</button>`
        
        ;
        navSection.appendChild(ShowNews)
    });
    
} 

const handleData = async (id) => {
    console.log(id);
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    const data = await res.json();
    const newsSection = document.getElementById('news-section')
    data.data.forEach(item => {
        console.log(item);
        const div = document.createElement('div');
        // newsSection.innerHTML = '';
        div.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="${item.image_url}"
                    alt="Movie" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">${item.details}</h2>
                  <p>${item.category_id}</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Watch</button>
                  </div>
                </div>
              </div>
        `
        
        newsSection.appendChild(div)
    });
}
 

loadData()