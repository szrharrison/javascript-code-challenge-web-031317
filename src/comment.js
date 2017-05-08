class Comment {
  constructor(text) {
    this.text = text
  }

  render() {
    return `<li>
      <div class="card-panel teal">
        <a class="btn-floating btn-large red remove-comment"><i class="material-icons">close</i></a>
        <span class="white-text">
          ${this.text}
        </span>
      </div>
    </li>`
  }
}
