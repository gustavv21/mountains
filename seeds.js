var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Krzys Ktos",
        image: "https://static.miauhau.pl/media/articles/1603/27/20858-jak-slyszy-pies-0.jpg",
        description: "qwertyuio asdfghjk zxcvbnm"
    },
      {
        name: "Daniel Statham",
        image: "https://www.krainapsa.pl/wp-content/uploads/2017/09/placz-736x430.jpg",
        description: "qwertyuio asdfghjk zxcvbnm"
    },
    {
        name: "Ferdek Kiepski",
        image: "http://bi.gazeta.pl/im/ca/9e/14/z21621962Q,Psy---najlepsi-przyjaciele-czlowieka-.jpg",
        description: "qwertyuio asdfghjk zxcvbnm"
    }
];

function seedDB(){
    Campground.remove({}, function(err){
        if(err){
            console.log(err)
        }
        console.log("removed camp");
          data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a campground");
                        Comment.create(
                            {
                                text: "blablabla blablabla",
                                author: "Ktos gdzie cos"
                            }, function(err, comment){
                                if(err){
                                    console.log(err)
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("created new comments")
                                }
                                
                        })
                    }
                })
            })
    });
};


module.exports = seedDB;