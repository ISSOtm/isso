var html = function (globals) {
  var i18n = globals.i18n;
  var conf = globals.conf;
  var author = globals.author;
  var email = globals.email;
  var website = globals.website;
  var notify = conf["reply-notifications-default-enabled"] ? " checked" : '';

  return "" +
  "<form class='isso-postbox'>"
  + "<textarea class='isso-textarea' rows='5' minlength='3' maxlength='65535' placeholder='" + i18n('postbox-text') + "'></textarea>"
  + "<div class='isso-preview'>"
    + "<div class='isso-comment'>"
      + "<div class='isso-text-wrapper'>"
        + "<div class='isso-text'></div>"
      + "</div>"
    + "</div>"
  + "</div>"
  + "<fieldset class=grid>"
    + "<div>"
      + "<label for='isso-postbox-author'>" + i18n('postbox-author') + "</label>"
      + "<input id='isso-postbox-author' type='text' name='author' placeholder='" + i18n('postbox-author-placeholder') + "' value='" + (author ? author : '') + "' autocorrect=off />"
    + "</div>"
    + "<div>"
      + "<label for='isso-postbox-email'>" + i18n('postbox-email') + "</label>"
      + "<input id='isso-postbox-email' type='email' name='email' placeholder='" + i18n('postbox-email-placeholder') + "' value='" + (email ? email : '') + "' />"
    + "</div>"
    + "<div>"
      + "<label for='isso-postbox-website'>" + i18n('postbox-website') + "</label>"
      + "<input id='isso-postbox-website' type='url' name='website' placeholder='" + i18n('postbox-website-placeholder') + "' value='" + (website ? website : '') + "' />"
    + "</div>"
    + "<div role=group>"
      + "<input type='button' class=secondary name='preview' value='" + i18n('postbox-preview') + "' />"
      + "<input type='button' class=contrast name='edit' value='" + i18n('postbox-edit') + "' />"
      + "<input type='submit' value='" + i18n('postbox-submit') + "' />"
    + "</div>"
  + "</fieldset>"
  + "<small>Your email address is only used to generate a different avatar. I do not share it with anyone else.</small>"
  + "<div class='isso-notification-section'>"
    + "<label>"
      + "<input type='checkbox'" + notify + " name='notification' />" + i18n('postbox-notification')
    + "</label>"
  + "</div>"
+ "</form>"
};
module.exports = html;
