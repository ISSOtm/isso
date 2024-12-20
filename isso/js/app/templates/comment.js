var html = function (globals) {
  var i18n = globals.i18n;
  var comment = globals.comment;
  var conf = globals.conf;
  var datetime = globals.datetime;
  var humanize = globals.humanize;
  var svg = globals.svg;

  var author = comment.author ? comment.author : i18n('comment-anonymous');
  var isPageAuthor = conf["page-author-hashes"].indexOf(comment.hash) > -1;
  var pageAuthorClass = (isPageAuthor ? " isso-is-page-author" : '');

  return "" +
"<article class='isso-comment" + pageAuthorClass + "' id='isso-" + comment.id + "' data-hash='" + comment.hash + "' itemprop=comment itemscope itemtype='https://schema.org/Comment'>"
+ (conf.gravatar ? "<div class='isso-avatar'><img src='" + comment.gravatar_image + "'></div>" : '')
+ (conf.avatar ? "<div class='isso-avatar'><svg data-hash='" + comment.hash + "'></svg></div>" : '')
  + "<header class='isso-comment-header'>"
    + (comment.website
        ? "<a class='isso-author' href='" + comment.website + "' rel='author nofollow'>" + author + "</a>"
        : "<span class='isso-author' itemprop=author>" + author + "</span>")
    + (isPageAuthor
        ? "<span class='isso-spacer'>&bull;</span>"
          + "<span class='isso-page-author-suffix'>" + i18n('comment-page-author-suffix') + "</span>"
        : '' )
     + "<span class='isso-spacer'>&bull;</span>"
     + "<a class='isso-permalink' href='#isso-" + comment.id + "'>"
       + "<time title='" + humanize(comment.created) + "' datetime='" + datetime(comment.created) + "' itemprop=datePublished>" + humanize(comment.created) + "</time>"
     + "</a>"
     + "<span class='isso-note'>"
         + (comment.mode == 2 ? i18n('comment-queued') : (comment.mode == 4 ? i18n('comment-deleted') : ''))
     + "</span>"
  + "</header>" // .isso-comment-header
  + "<div class='isso-text' itemprop=text>"
    + (comment.mode == 4 ? '<p>&nbsp;</p>' : comment.text)
  + "</div>" // .text
  + "<footer class='isso-comment-footer'>"
    + (conf.vote
        ? "<a class='isso-upvote' href='#'>" + svg['arrow-up'] + "</a>"
          + "<span class='isso-spacer'>|</span>"
          + "<a class='isso-downvote' href='#'>" + svg['arrow-down'] + "</a>"
        : '')
     + "<a class='isso-reply' href='#'>" + i18n('comment-reply') + "</a>"
     + "<a class='isso-edit' href='#'>" + i18n('comment-edit') + "</a>"
     + "<a class='isso-delete' href='#'>" + i18n('comment-delete') + "</a>"
  + "</footer>" // .isso-comment-footer
+ "<div class='isso-follow-up'></div>"
+ "</article>" // .isso-comment
};
module.exports = html;
