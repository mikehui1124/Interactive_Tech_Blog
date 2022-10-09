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

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);
