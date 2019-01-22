var postsApp = (function() {

  function viewPosts(){

    let uri = `${window.location.origin}/api/posts`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', uri);

    xhr.setRequestHeader(
      'Content-Type',
      'application/json; charset=UTF-8'
    );

    xhr.send();

    xhr.onload = function(){
      let app = document.getElementById('app');
      let data = JSON.parse(xhr.response);
      let posts = data.posts;
      let table = '';
      let rows = '';

      //Loop each user record into it's own HTML table row, each user should
      //have a link a user view
      for (let i=0; i<posts.length; i++) {
        rows = rows + `<tr>
          <td>
            <a href="#view-${posts[i]['_id']}">${posts[i]['title']}</a>
          </td>
          <td>${posts[i]['description']}</td>
        </tr>`;
      }

      //Create a users panel, add a table to the panel,
      //inject the rows into the table
      table = `<div class="card">
        <div class="card-header clearfix">
          <h3 class="h3 float-left">Posts</h3>
          <div class="float-right">
            <a href="#create" class="btn btn-primary">New Post</a>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <td>Title</td>
                <td>Description</td>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>`;

      //Append the HTML to the #app
      app.innerHTML = table;
    }
  }

  function viewOnePost(id) {
    let uri = `${window.location.origin}/api/posts/${id}`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', uri);

    xhr.setRequestHeader(
      'Content-Type',
      'appllication/json; charset=UTF-8'
    );

    xhr.send();

    xhr.onload = function() {
      let app = document.getElementById('app');
      let data = JSON.parse(xhr.response);
      let card = '';

      card = `<div class="card">
        <div class="card-header clearfix">
          <h2 class="h3 float-left">${data.post.title}</h2>
          <div class="float-right">
            <a href="#edit-${data.post._id}" class="btn btn-primary">Edit</a>
          </div>
        </div>
        <div class="card-body">
          <div>${data.post.body}</div>
        </div>
      </div>`;

      app.innerHTML = card;
    }
  }

  function createPost(){
    var app = document.getElementById('app');

    var form =  `
        <div class="card">
          <div class="card-header clearfix">
            <h2 class="h3 float-left">Create a New Post</h2>
            <div class="float-right">
              <a href="#" class="btn btn-primary">Cancel</a>
            </div>
          </div>
          <div class="card-body">
          <form id="createPost" class="card-body">
            <div id="formMsg" class="alert alert-danger text-center">Your form has errors</div>
              <div class="form-group col-md-12">
                <label for="title">Title</label>
                <input type="text" id="title" name="title" class="form-control" required>
              </div>
              <div class="form-group col-md-12>
                <label for="body">Body</label>
                <textarea id="body" name="body" class="form-control"></textarea>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="description">Description</label>
                  <input type="text" id="description" name="description" class="form-control">
                </div>

                <div class="form-group col-md-6">
                  <label for="keywords">Keywords</label>
                  <input type="text" id="keywords" name="keywords" class="form-control">
                </div>
              </div>

              <div class="text-right">
                <input type="submit" value="Submit" class="btn btn-lg btn-primary btn-sm-block">
              </div>
            </form>
          </div>
        </div>
    `;

    app.innerHTML=form;
  }

  function editPost(id) {
    let uri = `${window.location.origin}/api/posts/${id}`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', uri);

    xhr.setRequestHeader(
      'Content-Type',
      'application/json; charset=UTF-8'
    );

    xhr.send();

    xhr.onload = function() {
      let app = document.getElementById('app');
      let data = JSON.parse(xhr.response);

      var form =  `
        <div class="card">
          <div class="card-header clearfix">
            <h2 class="h3 float-left">Edit</h2>
            <div class="float-right">
              <a href="#" class="btn btn-primary">Cancel</a>
            </div>
          </div>
          <div class="card-body">
            <form id="editPost" class="card-body">
              <input type="hidden" id="_id" name="_id" value="${data.post._id}">
              <div id="formMsg" class="alert alert-danger text-center">Your form has errors</div>

              <div class="form-group col-md-12">
                <label for="title">Title</label>
                <input type="text" id="title" name="title"
                class="form-control" value="${data.post.title}">
              </div>
              <div class="form-group col-md-12>
                <label for="body">Body</label>
                <textarea id="body" name="body"
                class="form-control">${data.post.body}</textarea>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="description">Description</label>
                  <input type="text" id="description" name="description"
                  class="form-control" value="${data.post.description}">
                </div>

                <div class="form-group col-md-6">
                  <label for="keywords">Keywords</label>
                  <input type="text" id="keywords" name="keywords"
                  class="form-control" value="${data.post.keywords}">
                </div>
              </div>

              <div class="text-right">
                <input type="submit" value="Submit" class="btn btn-lg btn-primary btn-sm-block">
              </div>
              <div>
                <a href="#delete-${data.post._id}" class="text-danger">Delete</a>
              </div>
            </form>
          </div>
        </div>
      `;

      app.innerHTML=form;
      processRequest('editPost', '/api/posts', 'PUT');
    }
  }

  function deleteView(id) {
    let uri = `${window.location.origin}/api/posts/${id}`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', uri);

    xhr.setRequestHeader(
      'Content-Type',
      'application/json; charset=UTF-8'
    );

    xhr.send();

    xhr.onload = function() {
      let app = document.getElementById('app');
      let data = JSON.parse(xhr.response);
      let card = '';

      card = `<div class="card bg-transparent border-danger text-danger bg-danger">
        <div class="card-header bg-transparent border-danger">
          <h2 class="h3 text-center">You're About to Delete a Post</h2>
        </div>
        <div class="card-body text-center">
          <div>
            <p>Are you sure you want to delete this post?</p>
            <p><strong>${data.post.title}</strong></p>
          </div>
          <div class="text-center">
            <br>
            <a onclick="postsApp.deletePost('${data.post._id}');"
            class="btn btn-lg btn-danger text-white">
              Yes, delete this post.
            </a>
          </div>

        </div>
      </div>`;

      app.innerHTML = card;
    }
  }

  function deletePost(id) {
    let uri = `${window.location.origin}/api/posts/${id}`;
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', uri);

    xhr.setRequestHeader(
      'Content-Type',
      'application/json; charset=UTF-8'
    );

    xhr.send();

    xhr.onload = function(){
      let data = JSON.parse(xhr.response);
      if (data.success === true) {
        window.location.hash = '#';
      } else {
        alert('Unknown error, the user could not be deleted');
      }
    }
  }

  function processRequest(formId, url, method){
    let form = document.getElementById(formId);
    form.addEventListener('submit', function(e){
      e.preventDefault();

      let formData = new FormData(form);
      let uri = `${window.location.origin}${url}`;
      let xhr = new XMLHttpRequest();
      xhr.open(method, uri);

      xhr.setRequestHeader(
        'Content-Type',
        'application/json; charset=UTF-8'
      );

      let object = {};
      formData.forEach(function(value, key){
        object[key]=value;
      });

      xhr.send(JSON.stringify(object));
      xhr.onload = function(){
        let data = JSON.parse(xhr.response);
        if(data.success===true){
          window.location.href = '/users/app';
        }else{
          document.getElementById('formMsg').style.display='block';
        }
      }
    });
  }

  function processRequest(formId, url, method){
    let form = document.getElementById(formId);
    form.addEventListener('submit', function(e){
      e.preventDefault();

      let formData = new FormData(form);
      let uri = `${window.location.origin}${url}`;
      let xhr = new XMLHttpRequest();
      xhr.open(method, uri);

      xhr.setRequestHeader(
        'Content-Type',
        'application/json; charset=UTF-8'
      );

      let object = {};
      formData.forEach(function(value, key){
        object[key]=value;
      });

      xhr.send(JSON.stringify(object));
      xhr.onload = function(){
        let data = JSON.parse(xhr.response);
        if(data.success===true){
          window.location.href = '/posts/app';
        }else{
          document.getElementById('formMsg').style.display='block';
        }
      }
    });
  }

  return {
    load: function(){
      let hash = window.location.hash;
      let hashArray = hash.split('-');

      switch(hashArray[0]){
        case '#create':
          createPost();
          processRequest('createPost', '/api/posts', 'POST');
          break;

        case '#view':
          viewOnePost(hashArray[1]);
          break;

        case '#edit':
          editPost(hashArray[1]);
          break;

        case '#delete':
          deleteView(hashArray[1]);
          break;

        default:
          viewPosts();
          break;
      }
    },

    deletePost: function(id) {
      deletePost(id);
    }
  }

})();

postsApp.load();

window.addEventListener("hashchange", function(){
  postsApp.load();
});
