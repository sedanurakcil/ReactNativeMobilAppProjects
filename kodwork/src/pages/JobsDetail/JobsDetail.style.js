import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBody: {
    backgroundColor: '#eaeaea',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#30336b',
  },
  upper_location_container: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  locations_left: {
    color: '#eb4d4b',
    fontWeight: 'bold',
  },
  locations_right: {},
  upper_job_container: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  job_left: {
    color: '#eb4d4b',
    fontWeight: 'bold',
  },
  job_right: {},
  detail_title: {
    textAlign: 'center',
    fontSize: 22,
    color: '#30336b',
  },
  content_body: {
    flex: 1,
    padding: 10,
  },
  info_container_text: {
    fontSize: 16,
  },
  button_body: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#eaeaea',
  },
});