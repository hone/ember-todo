import DS from 'ember-data';
import ENV from 'todo/config/environment';

export default DS.ActiveModelAdapter.extend({
  host: ENV.API_URL
});
