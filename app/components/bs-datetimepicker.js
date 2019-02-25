import DateTimePicker from 'gzkras-ember-cli-bootstrap-datetimepicker/components/bs-datetimepicker';
import ENV from '../config/environment';

export default DateTimePicker.extend({
  config: ENV['ember-cli-bootstrap-datetimepicker']
});
