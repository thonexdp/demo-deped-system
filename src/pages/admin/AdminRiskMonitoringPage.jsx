import RiskPageTemplate from '../../components/RiskPageTemplate'
import { divisionNavSections } from './navigation'


const badges = [
  { text: 'Admin / SDO', style: { backgroundColor: '#FFFBEB', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Division Risk', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
]

export default function AdminRiskMonitoringPage() {
  return (
    <RiskPageTemplate
      activePath="/admin/risk-monitoring"
      roleNavSections={divisionNavSections}
      profile={{
        badgeCode: 'SD',
        title: 'Division Admin',
        subtitle: 'All Schools',
        rolePill: 'Admin / SDO',
        securityContext: 'Division-level risk monitoring and audit visibility.',
      }}
      heading="Early Warning Risk Dashboard"
      subheading="Division Risk Monitoring"
      topBadges={badges}
      contextText="Admin / SDO • Early Warning System"
      contextNotice="Division-wide risk monitoring across all schools."
    />
  )
}
