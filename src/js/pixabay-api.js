import axios from 'axios';
import renderFnc from './render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const myApiKey = '49502149-61d0264429aca11602d0077d5';
const serverRequest = searchWord => {
  axios
    .get(
      `https://pixabay.com/api/?key=${myApiKey}&q=${encodeURIComponent(
        searchWord
      )}&image_type=photo`
    )
    .then(response => {
      renderFnc(response);
    })
    .catch(error => {
      document.querySelector('.loader').style.display = 'none';
      document.querySelector('.gallery').innerHTML = '';
      iziToast.error({
        message: `${error}`,
        backgroundColor: '#EF4040',
        close: true,
        position: 'topRight',
      });
    });
};

export default serverRequest;
