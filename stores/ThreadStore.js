import { Model, Collection } from 'backbone';
import jQuery from 'jquery';


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
    var threads = this.toJSON();

    // JSONify comment stores
    for(var i = 0; i < threads.length; i++){
      threads[i].comments = threads[i].comments.toJSON();
    }

    var data = {
      threads: threads
    }
    console.log(data)

    // Save threads to server
    jQuery.ajax({
      type: "POST",
      url: "http://localhost:4000/setThreads",
      data: data,
      success: function(){
        console.log("Saved threads to server")
      }
    });
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
