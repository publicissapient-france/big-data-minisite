
definePackage("xebia", function(pkg) {

    pkg.constants = {
        VIMEO_CHANNEL_ID : "544319"
    };

    pkg.Application = fwk.Class.extend({

        start : function() {
            console.log("application started");

            this.videos = new pkg.vimeo.VimeoVideoCollection();
            this.videos.fetch();

            this.articles = new pkg.blog.BlockArticleCollection();
            this.articles.fetch();
        }

    });

});