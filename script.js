document.addEventListener('DOMContentLoaded', () => {
  const postInput = document.getElementById('postInput');
  const addPostBtn = document.getElementById('addPostBtn');
  const postsContainer = document.getElementById('postsContainer');

  // Add new post
  addPostBtn.addEventListener('click', () => {
    const content = postInput.value.trim();
    if (content === '') return;

    // Create a post element
    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    const postText = document.createElement('p');
    postText.textContent = content;

    const likeBtn = document.createElement('button');
    likeBtn.textContent = 'Like';
    likeBtn.className = 'like-btn';

    postDiv.appendChild(postText);
    postDiv.appendChild(likeBtn);
    postsContainer.prepend(postDiv); // Add gitto top of feed

    // Clear input
    postInput.value = '';

    // Like/unlike functionality
    let liked = false;
    likeBtn.addEventListener('click', () => {
      liked = !liked;
      likeBtn.textContent = liked ? 'Unlike' : 'Like';
      likeBtn.style.color = liked ? 'red' : 'black';
    });
  });
});
