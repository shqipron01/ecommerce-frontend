import Echo from 'laravel-echo';
import Pusher from 'pusher-js';


const echo = new Echo({
  broadcaster: 'pusher',
  key: 'dab503397756ace18b9a',
  cluster: 'mt1',
  forceTLS: true,
  encrypted: true,
});

export default echo;
