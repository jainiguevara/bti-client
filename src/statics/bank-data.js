import mbTemplate from './../assets/metrobank-template.csv'
import cbTemplate from './../assets/chinabank-template.csv'

const defaults = {
  description: 'Click on the buttons below for posting and generation of reports specifically for this bank.',
  form: false
}

export const metrobank = {
  title: 'Metrobank API',
    image: 'metrobank.jpg',
    headerColor: '#283593', 
    icon: 'blood-culture.png',
    postRoute: 'post/metrobank',
    reportRoute: 'list/metrobank',
    template: mbTemplate,
    ...defaults
}

export const chinabank = {
  title: 'Chinabank API',
  image: 'chinabank.jpg',
  headerColor: '#D32F2F', 
  icon: 'respiratory.png',
  postRoute: 'post/chinabank',
  reportRoute: 'list/chinabank',
  template: cbTemplate,
  ...defaults
}