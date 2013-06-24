
definePackage("xebia", function(pkg) {

    pkg.constants = {
        VIMEO_CHANNEL_ID : "544319"
    };

    pkg.Application = fwk.Class.extend({

        start : function() {
            console.log("application started");

            var videos = new pkg.vimeo.VimeoVideoCollection();
            videos.fetch();

            var videosView = new pkg.vimeo.VimeoVideoCollectionView({collection : videos});
            videosView.$el.appendTo($("#our-videos .videos-container"));

            var articles = new pkg.blog.BlockArticleCollection();
            articles.fetch();

            var articlesView = new pkg.blog.BlogArticleCollectionView({collection: articles});
            articlesView.$el.appendTo($("#our-articles .articles-container"));
        }

    });

});