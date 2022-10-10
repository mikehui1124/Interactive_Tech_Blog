const newFormHandler = async (event) => {
  event.preventDefault();

const title = document.querySelector('#blog-title').value.trim();  
const content = document.querySelector('#blog-content').value.trim();  

  if (title && content) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // redirect to dashboard.hds view
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create blog');
    }
  }
};

const delButtonHandler = async (event) => {
  //'data-id' decides if DELETE button is clicked to trigger a delete
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    // hit Delete route defined in blogRoute.js
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });
// if blog record found, redirect to dashboard.hds view 
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete a blog');
    }
  }
};

// when a blog clicked, get blog_id of the blog
var id_int;
const getBlogIdHandler = function(event) {
  document.querySelector('#blog-title').value = '';
  document.querySelector('#blog-content').value = '';
  // target a blog_btn from the blog-list and get blog_id
  if (event.target.hasAttribute('data-id2')){
    const id = event.target.getAttribute('data-id2');
    id_int = parseInt(id);     
  }
}

// when updateBtn clicked, PUT request to update a selected blog
const updateBlogHandler = async ()=> { 
  const title = document.querySelector('#blog-title').value.trim();  
  const content = document.querySelector('#blog-content').value.trim();
  console.log(title, content, id_int);

  // pass blog_id to the PUT request
  const response = await fetch(`/blog/${id_int}`, {
    method: 'PUT',
    body: JSON.stringify({ title: title, content: content }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    // leave a note for updated
    document.querySelector('#blog_updated').textContent = 'Your Blog updated, please return to Home.';
    
  } 
}

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);

// eventlistener to blog-list, instead of blog_btn
document
  .querySelector('.blog-list')
  .addEventListener('click', getBlogIdHandler);

document
  .querySelector('#update_btn')
  .addEventListener('click', updateBlogHandler);
