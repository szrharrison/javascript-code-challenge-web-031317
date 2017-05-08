class CommentList {
  constructor() {
    this.comments = []
  }

  render() {
    let liComments = this.comments.map((comment) => {
      return comment.render()
    })
    return `<ul>${liComments.join('')}</ul>`
  }

  addComment(text) {
    this.comments.push( new Comment(text) )
  }

  remove(text) {
    let i = this.comments.findIndex(function(comment) {
      comment.text === text
      console.log( comment.text, text, comment.text === text ) // This evaluates to true so if there's only one comment and you click. Why does i = -1 afterwards?
    })
    if (i > -1) {
      this.comments.splice(i, 1)
    }
  }
}
