import $ from 'jquery';

const loadHtmlSuccessCallbacks = [];

export function onLoadHtmlSuccess(callback) {
  if (!loadHtmlSuccessCallbacks.includes(callback)) {
    loadHtmlSuccessCallbacks.push(callback);
  }
};

function loadIncludes(parent) {
  if (!parent) parent = 'body';

  $(parent).find('[gallery-include]').each(function (index, elem) {
    const url = $(elem).attr('gallery-include');

    $.ajax({
      url,
      success(data) {
        $(elem).html(data);
        $(elem).removeAttr('gallery-include');
        
        loadHtmlSuccessCallbacks.forEach(callback => callback(data));
        loadIncludes(elem);
      }
    });
  })
}

loadIncludes();