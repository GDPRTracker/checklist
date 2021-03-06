import React from 'react'
import { steps } from '../data.js'
import logo from '../images/logo.svg'
import { url } from '../shared/meta'
import Scrollspy from 'react-scrollspy'

const Sidebar = props => (
  <div className="fixed">
    <a href="/">
      <img src={logo} alt="GDPR Checklist" className="logo" />
    </a>
    <nav>
      <ul>
        <Scrollspy items={['data', 'accountability-management', 'new-rights', 'consent', 'follow-up', 'special-cases', 'user-rights']} currentClassName="is-current">
          { steps.map(s => <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>)}
        </Scrollspy>
      </ul>
      <h4 style={{ marginTop: '20px' }}>Compliance tools</h4>
      <ul>
        <li><a href='https://www.gdprform.io' target="_blank">GDPR Form</a></li>
        <li><a href='https://compliancerank.com' target="_blank">ComplianceRank</a></li>
        <li><a href='https://ccpacompliancechecklist.com' target="_blank">CCPA Checklist</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href='https://databreach.es/'>DATA Breaches</a></li>
      </ul>
      <h4 style={{ marginTop: '20px' }}>Created by</h4>
      <ul>
        <li><a href='https://www.complianceboard.io' target="_blank">ComplianceBoard</a></li>
      </ul>
    </nav>
    <div className='newsletter-sidebar'>
      <a href="http://eepurl.com/duyFHH" className="submit-button" style={{ marginTop: '10px' }}>Newsletter</a>
    </div>
  </div>
)

export default Sidebar
