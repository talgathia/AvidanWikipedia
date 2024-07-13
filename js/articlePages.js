document.addEventListener("DOMContentLoaded", () => {
    let addBtn = document.querySelector('.add-btn');
    let articlesContainer = document.querySelector('.all-articles-container');
    
    const createEditBtn = (article) => {
        let editBtn = document.createElement('img');
        editBtn.classList.add('edit-btn');
        editBtn.src = '../img/edit_icon.png';
        editBtn.alt = 'Editieren';
        article.appendChild(editBtn);
    
        editBtn.addEventListener('click', () => {
            let articleText = article.querySelector('.article-text');
            if(!articleText) return;
    
            let inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.className = 'edit-input';
            inputField.value = articleText.textContent;
    
            article.replaceChild(inputField, articleText);
            createSaveBtn(article, inputField);
        })
    }
    
    const createSaveBtn = (article, inputField) => {
        let saveBtn = document.createElement('button');
            saveBtn.classList.add('save-btn');
            saveBtn.textContent = 'Speichern';
            article.appendChild(saveBtn);
           
            saveBtn.addEventListener('click', () => {
                let articleText = document.createElement('p');
                articleText.className = 'article-text';
                articleText.textContent = inputField.value;
    
                article.replaceChild(articleText, inputField);
                article.removeChild(saveBtn);    
            })
    }
    
    const createRemoveBtn = (article) => {
        let removeBtn = document.createElement('img');
        removeBtn.classList.add('remove-btn');
        removeBtn.src = '../img/delete_icon.png';
        removeBtn.alt = 'Löschen';
        article.appendChild(removeBtn);
    
        removeBtn.addEventListener('click', () => {
            let confirmation = confirm("Willst du den Artikel wirklich löschen?")
            if(confirmation) {
                article.remove();
            }
        })
    }

    if(articlesContainer.hasChildNodes) {
        let article = document.querySelector('.article');
        createEditBtn(article);
        createRemoveBtn(article);
    } 
    


addBtn.addEventListener('click', () => {
    let newArticleDiv = document.createElement('div');
    newArticleDiv.classList.add('article');
    
    let newArticleParagraph = document.createElement('p');
    newArticleParagraph.classList.add('article-text');
    
    articlesContainer.appendChild(newArticleDiv);
    newArticleDiv.appendChild(newArticleParagraph);

    let newArticleInput = document.createElement('input');
    newArticleInput.className = '.edit-input';
    newArticleDiv.appendChild(newArticleInput);

    createSaveBtn(newArticleDiv, newArticleInput);
})


})
