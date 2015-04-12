import { Model, Collection } from 'backbone';


// Threads
class ThreadStore extends Collection {
  constructor(options) {
    this.model = Thread;
    super(options);

    this.on("add change", function(){
      console.log("changed")
      this.save();
    })

    console.log(this);
  }

  save(){
    console.log("Saved threads", this);
    localStorage.setItem("loco-threads", JSON.stringify(this.toJSON()));
  }

  nearby(location){

  }
}

class Thread extends Model {
  constructor(options){

    options.comments = new CommentStore(options.comments ? options.comments : []); // Ensure that comments are a threadstore and not an array
    super(options);
  }


}

// Comments
class CommentStore extends Collection {
  constructor(options){
    this.model = Comment;
    super(options);
  }
}

class Comment extends Model {}


export default ThreadStore;
