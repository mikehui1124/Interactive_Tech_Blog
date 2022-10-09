const newFormHandler = async (event) => {
    event.preventDefault();
  
    const comment_text = document.querySelector('#comment-text').value.trim();
    const blogID = document.querySelector('#blogID').textContent;    
    const blogIdInt = parseInt(blogID); 

    console.log(comment_text);
    console.log(blogIdInt,  "type",typeof(blogIdInt)); 
  
    if (comment_text) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        // pass a normal object{} to req.body and create new comment in DB
        body: JSON.stringify({ comment_text: comment_text, blog_id: blogIdInt }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);

      if (response.ok) {
        // redirect to homepage.hds view
        document.querySelector('#cmt_created').textContent = 'Comment added, please return to Home.';
        //document.location.replace('/');
      } else {
        alert('Failed to create comment');
      }
    }
  };

document
.querySelector('.new-comment-form')
.addEventListener('submit', newFormHandler);