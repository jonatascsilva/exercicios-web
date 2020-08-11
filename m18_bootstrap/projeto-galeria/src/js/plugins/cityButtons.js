import $ from 'jquery';
import { onLoadHtmlSuccess } from '../core/includes';

const animationDuration = 400;

function filterByCity(city, event) {
  $(event.target).siblings().removeClass('active');
  
  $('[gallery-city]').each(function (index, elem) {
    const isTarget = $(this).attr('gallery-city') === city || city === null;

    if (isTarget) {
      $(this).fadeOut(animationDuration).parent().removeClass('d-none');
      $(this).fadeIn(animationDuration);
    } else {
      $(this).fadeOut(animationDuration, () => {
        $(this).parent().addClass('d-none');
      });
    }
  });
}

$.fn.cityButtons = function () {
  const cities = new Set;

  $('[gallery-city]').each(function (index, elem) {
    cities.add($(elem).attr('gallery-city'));
  });

  const buttonsAllCities = $('<button>').addClass(['btn', 'btn-info']).html('Todas');
  buttonsAllCities.click(function (e) {
    filterByCity(null, e);
    $(this).addClass('active');
  });
  
  const buttonsByCities = Array.from(cities).map(city => {
    const buttonByCity = $('<button>').addClass(['btn', 'btn-info']).html(city);
    buttonByCity.click(function (e) {
      filterByCity(city, e);
      $(this).addClass('active');
    });

    return buttonByCity;
  });

  const filterButtons = [];

  filterButtons.push(buttonsAllCities);
  filterButtons.push(...buttonsByCities);  

  const wrapButtons = $('<div>').addClass(['btn-group']);
  wrapButtons.append(filterButtons);

  this.html(wrapButtons);

  return this;
}

onLoadHtmlSuccess(function () {
  $('[gallery-city-buttons]').cityButtons();
});