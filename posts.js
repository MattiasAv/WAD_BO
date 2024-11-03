// fetch('https://api.jsonbin.io/v3/b/67266e1ae41b4d34e44d2cde', {
fetch('/WAD_BO/res/json/posts.json', {
  method: 'GET',
  headers: {
    'X-Access-Key': '$2a$10$zxC.9wbsVm/7i.r6SoSpZuU18QrnJA0GO5JBDK97qtohy.0xbrwqG',
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => {
    
    const postsContainer = document.getElementById('posts-container');
    data.forEach(post => {
  // use data.record.forEach when using jsonbin
      
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');
      postDiv.id = `post${post.post_id}`;

      const postHeader = document.createElement('div');
      postHeader.classList.add('post-header');

      const userIcon = document.createElement('img');
      userIcon.classList.add('user-icon');
      userIcon.src = post.pfp_url;
      userIcon.alt = 'User Icon';

      const postDate = document.createElement('span');
      postDate.classList.add('post-date');
      postDate.textContent = new Date(post.create_time).toLocaleDateString(); 

      const postAuthor = document.createElement('p')
      postAuthor.textContent = post.author_name
      
      const postAuthorAndDateDiv = document.createElement('div')
      postAuthorAndDateDiv.appendChild(postAuthor)
      postAuthorAndDateDiv.appendChild(postDate)


      postHeader.appendChild(userIcon);
      postHeader.appendChild(postAuthorAndDateDiv);

      const postBody = document.createElement('div');
      postBody.classList.add('post-body');

      const postImage = document.createElement('img');
      postImage.classList.add('post-image');
      if (post.photo_url != "null"){
        postImage.src = post.photo_url; 
        postBody.appendChild(postImage);
      }

      const postText = document.createElement('p');
      postText.classList.add('post-text');
      if (post.content != "null"){
        postText.textContent = post.content; 
        postBody.appendChild(postText);
      }

      const likeButton = document.createElement('div');
      likeButton.classList.add('like-button');

      const likeIcon = document.createElement('span');
      likeIcon.classList.add('like-button');
      likeIcon.textContent = '👍';

      likeButton.appendChild(likeIcon);

      postDiv.appendChild(postHeader);
      postDiv.appendChild(postBody);
      postDiv.appendChild(likeButton);

      postsContainer.appendChild(postDiv);
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));
