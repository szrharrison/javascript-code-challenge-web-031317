let commentList = new CommentList()
const commentDiv = $('#comment-list')
const inputTextField = $('#note-form textarea')
const commentForm = $('#note-form')

$(document).ready(function(){
  // your code here!
  commentForm.on('submit', function(submit) {
    submit.preventDefault()
    addComment()
    displayComments()
    listenForClicks()
  })
})

function displayComments() {
  commentDiv.html(commentList.render())
}

function addComment() {
  let commentText = inputTextField.val()
  commentList.addComment(commentText)
  inputTextField.val('')
}

function listenForClicks() {
  $('.remove-comment').click(function() {
    let commentText = $.trim( $(this).next().text() )
    console.log( commentText )
    commentList.remove(commentText)
    displayComments()
  })
}
